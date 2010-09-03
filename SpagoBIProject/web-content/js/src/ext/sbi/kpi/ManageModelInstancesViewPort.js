/**
 * SpagoBI - The Business Intelligence Free Platform
 *
 * Copyright (C) 2004 - 2008 Engineering Ingegneria Informatica S.p.A.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * 
 **/

/**
 * Object name
 * 
 * [description]
 * 
 * 
 * Public Properties
 * 
 * [list]
 * 
 * 
 * Public Methods
 * 
 * [list]
 * 
 * 
 * Public Events
 * 
 * [list]
 * 
 * Authors - Monica Franceschini
 */
Ext.ns("Sbi.kpi");

Sbi.kpi.ManageModelInstancesViewPort = function(config) { 
	var paramsResList = {MESSAGE_DET: "MODELINST_RESOURCE_LIST"};
	var paramsResSave = {MESSAGE_DET: "MODELINST_RESOURCE_SAVE"};

	var conf = config;
	this.resListService = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'MANAGE_MODEL_INSTANCES_ACTION'
		, baseParams: paramsResList
	});	
	this.resSaveService = Sbi.config.serviceRegistry.getServiceUrl({
		serviceName: 'MANAGE_MODEL_INSTANCES_ACTION'
		, baseParams: paramsResSave
	});	
	this.resourcesStore = new Ext.data.JsonStore({
    	autoLoad: false    	  
    	, root: 'rows'
		, url: this.resListService	
		, fields: ['resourceId', 'resourceName', 'resourceCode', 'resourceType', 'modelInstId']

	});
	//DRAW center element
	conf.hideContextMenu = false;
	this.manageModelInstances = new Sbi.kpi.ManageModelInstances(conf, this);

	//DRAW west element
    this.modelInstancesGrid = new Sbi.kpi.ManageModelInstancesGrid(conf, this);
   //DRAW east element
    this.manageModelsTree = new Sbi.kpi.ManageModelsTree(conf, this.modelInstancesGrid);
    conf.readonlyStrict = true;
    conf.dropToItem = 'kpinameField';
    this.manageKpis = new Sbi.kpi.ManageKpisGrid(conf, this.manageModelInstances);
    
    this.resourcesTab = new Ext.Panel({
        title: LN('sbi.modelinstances.resourcesTab')
	        , id : 'resourcesTab'
	        , layout: 'fit'
	        , autoScroll: true
	        , width: 300
	        , items: []
	        , itemId: 'resourcesTab'
	        , scope: this
	});
    this.initResourcesGridPanel();
    this.initPanels();
    
    
	var c = Ext.apply({}, config || {}, this.viewport);
	
	Sbi.kpi.ManageModelInstancesViewPort.superclass.constructor.call(this, c);	 		

};

Ext.extend(Sbi.kpi.ManageModelInstancesViewPort, Ext.Viewport, {
	manageModelInstances: null,
	modelInstancesGrid: null,
	manageModelsTree: null,
	manageKpis: null,
	resourcesTab : null,
	centerTabbedPanel: null,
	viewport: null,
	lastRecSelected: null

	,initPanels : function() {
		this.modelInstancesGrid.addListener('rowclick', this.sendSelectedItem, this);	
		
		this.manageModelsTree.addListener('render', this.configureDD, this);


		this.modelInstancesTreeTab = new Ext.Panel({
	        title: LN('sbi.modelinstances.treeTitle')
		        , id : 'modeinstTab'
		        , layout: 'fit'
		        , autoScroll: true
		        , items: [this.manageModelInstances]
		        , itemId: 'modInstTab'
		        , scope: this
		});
		this.tabs = new Ext.TabPanel({
	           enableTabScroll : true
	           , activeTab : 0
	           , autoScroll : true
	           //NB: Important trick: to render all content tabs on page load
	           , deferredRender: false
	           , width: 450
	           , height: 450
	           , itemId: 'tabs'
			   , items: [this.modelInstancesTreeTab, this.resourcesTab]

			});
		
           
		this.viewport = {
				layout: 'border'
				, height:560
				, autoScroll: true
				, items: [
			         {
			           id: 'modelInstancesList00',
			           region: 'west',
			           width: 275,
			           height:560,
			           collapseMode:'mini',
			           autoScroll: true,
			           split: true,
			           layout: 'fit',
			           items:[this.modelInstancesGrid]
			          },
				    {
			           id: 'main00',	  
				       region: 'center',
				       width: 300,
				       height:560,
				       split: true,
				       collapseMode:'mini',
				       autoScroll: true,
				       layout: 'fit',
				       items: [this.tabs]
				    }, {
				        region: 'east',
				        split: true,
				        width: 500,
				        height:560,
				        id: 'modelsTree00',
				        collapsed:false,
				        collapseMode:'mini',
				        autoScroll: true,
				        layout:'border',
				        defaults: {
				            split: true
				        },

				        items:[
								{
									region:'center',
									collapseMode:'mini',
				                    items:[this.manageModelsTree]
				                },{
				                	region:'east', 
				                	collapsed: true,
				                	collapseMode:'mini',
				                    width: 300,
				                    height: 500,
				                    minSize: 100,
				                    layout: 'fit',
				                    autoScroll: true,
				                    items:[this.manageKpis],
				                    listeners : {
				                        beforeCollapse: function(cmp){
				                            //expand model instances list
				                            var toCollapse = Ext.getCmp('modelInstancesList00');
				                            toCollapse.expand();
				                        },
				                        beforeExpand: function(cmp){
				                            //collapse model instances list
				                            var toCollapse = Ext.getCmp('modelInstancesList00');
				                            toCollapse.collapse();
				                        }
				                    }
				                }    
				        ]
				    }
				]
				

			};

	}

	,sendSelectedItem: function(grid, rowIndex, e){
		var rec = grid.getSelectionModel().getSelected();
	
		//if unsaved changes
		if(this.manageModelInstances.nodesToSave.length > 0){
			//if there are modification on current selection
			Ext.MessageBox.confirm(
					LN('sbi.generic.pleaseConfirm'),
					LN('sbi.generic.confirmChangeNode'),            
		            function(btn, text) {
	
		                if (btn=='yes') {
	
		                	this.manageModelInstances.cleanAllUnsavedNodes();	        			
		        			this.displayTree(rec);
			        		if(rec != this.lastRecSelected){
			        			this.lastRecSelected = rec;
			        		}
	
		                }else{
		                	grid.getSelectionModel().selectRecords([this.lastRecSelected]);
		                	
		                }
	
		            },
		            this
				);
		}else{
			var analyzedRec = this.recordAnalyze(rec);
			
			this.displayTree(analyzedRec);
			this.dispalyResourcesGridPanel(analyzedRec);
			
			if(analyzedRec != this.lastRecSelected){
				this.lastRecSelected = analyzedRec;
			}
		}
	
	}
	, recordAnalyze: function(rec){

		//checks if model instance id is defined
		var modelInstID = rec.get('modelInstId');
		if(modelInstID === undefined){
			//new model instance --> data coming from model
			var analyzedRec = new Ext.data.Record ({
				 modelInstId : '',
				 modelId : rec.get('modelId') ,
				 kpiInstId : '',
				 name : rec.get('name'),
				 description : rec.get('description'),
				 modelName : rec.get('name'),
				 modelCode : rec.get('code'),
				 modelDescr : rec.get('description'),
				 modelType : rec.get('type'),
				 modelTypeDescr : rec.get('typeDescr'),
				 text : rec.get('text')	,
				 modelText : rec.get('text'),
				 error: false,
				 toSave : true
			});
			return analyzedRec;
		}
		return rec;
	}
	, displayTree: function(rec){

		this.manageModelInstances.rootNodeText = rec.get('name');
		this.manageModelInstances.rootNodeId = rec.get('modelInstId');

		//main instances tree - center
		var newroot = this.manageModelInstances.createRootNodeByRec(rec);
		this.manageModelInstances.mainTree.setRootNode(newroot);
		//if new model instance
		if(rec.get('modelInstId') == ''){
			this.manageModelInstances.newRootNode = newroot;
		}else{
			this.manageModelInstances.existingRootNode = newroot;
		}
		
		this.manageModelInstances.mainTree.getSelectionModel().select(newroot);
		this.manageModelInstances.mainTree.doLayout();

		//model tree - left modelId
		this.manageModelsTree.rootNodeText = rec.get('modelText');
		this.manageModelsTree.rootNodeId = rec.get('modelId');

		var newroot2 = this.manageModelsTree.createRootNodeByRec(rec);
		this.manageModelsTree.modelsTree.setRootNode(newroot2);
		
		this.manageModelsTree.modelsTree.getSelectionModel().select(newroot2);
		this.manageModelsTree.modelsTree.doLayout();

	}
	, initResourcesGridPanel : function() {

    	this.smResources = new Ext.grid.CheckboxSelectionModel( {header: ' ',
    															singleSelect: false, 
    															scope:this, 
    															dataIndex: 'resourceId'} );
		
        this.cmResources = new Ext.grid.ColumnModel([
	         {header: LN('sbi.generic.name'), width: 40, sortable: true, dataIndex: 'resourceName'},
	         {header: LN('sbi.generic.code'), width: 60, sortable: true, dataIndex: 'resourceCode'}
	         ,{header: LN('sbi.generic.type'), width: 60, sortable: true, dataIndex: 'resourceType'}
	         ,this.smResources
	    ]);
 	    this.tb = new Ext.Toolbar({
 	    	buttonAlign : 'right',
 	    	items:[new Ext.Toolbar.Button({
 	            text: LN('sbi.generic.update'),
 	            //iconCls: 'icon-add',
 	            handler: this.saveResources,
 	            width: 30,
 	            scope: this
 	            })
 	    	]
 	    });

		this.resourcesGrid = new Ext.grid.GridPanel({
			store: this.resourcesStore 
			, id: 'resources-grid-checks'
   	     	, cm: this.cmResources
   	     	, sm: this.smResources
   	     	, frame: false
   	     	, border:false  
   	     	, layout: 'fit'
   	     	, collapsible:false
   	     	, deferRowRender:false
   	     	, loadMask: true
   	     	, tbar: this.tb
   	     	, viewConfig: {
   	        	forceFit:true
   	        	, enableRowBody:true
   	        	, showPreview:true
   	     	}
			, scope: this
		});
		this.resourcesGrid.superclass.constructor.call(this);
		
		this.resourcesStore.on('load',function(){
			Ext.getCmp("resources-grid-checks").selModel.clearSelections();

		    var arRec = Ext.getCmp("resources-grid-checks").store.queryBy(function(record,id){
		    	//alert(Ext.util.JSON.encode( record.data ));	
		    	if(record.data.modelInstId !== undefined && record.data.modelInstId != ''){
		    		return true;
		    	}
	            return false;
		    }).items;
		    
		    arRecLen = arRec.length;
		    for(i=0;i<arRecLen;i++){
		        var arRow= Ext.getCmp("resources-grid-checks").store.indexOf(arRec[i]);
		        Ext.getCmp("resources-grid-checks").selModel.selectRow(arRow);
		    }
		});  
		this.resourcesStore.load();
		this.resourcesTab.add(this.resourcesGrid);
		this.resourcesGrid.doLayout();

	}
	, dispalyResourcesGridPanel : function(rec) {

		if(rec !== undefined && rec != null){
			var params = {
	        	modelInstId : rec.data.modelInstId
	        }
	        
	        Ext.Ajax.request({
	            url: this.resListService,
	            params: params,
	            method: 'GET',
	            success: function(response, options) {
					if (response !== undefined) {			
			      		if(response.responseText !== undefined) {
			      			Ext.getCmp("resources-grid-checks").selModel.clearSelections();
			      			var content = Ext.util.JSON.decode( response.responseText );	
			      			Ext.each(content.rows, function(row, index) {
			      				
			    				var modelInstId = row.modelInstId;

			    				if(modelInstId != undefined && modelInstId == params.modelInstId){

			    					Ext.getCmp("resources-grid-checks").selModel.selectRow(index, true);
			    				}

			    			});

			      		}
					}
	            }
	            ,scope: this
	        });	
			
			
		}

	}
	, configureDD: function() {
		  var nodeTreePanelDropTarget = new Ext.tree.TreeDropZone(this.manageModelInstances.mainTree, {
		    ddGroup  : 'tree2tree',
		    dropAllowed : true,
		    overClass: 'over',
		    copy: true,
		    scope: this,
		    initialConfig: this.manageModelsTree
		  });

	}

	, saveResources: function() {
		this.modelInstance = this.modelInstancesGrid.getSelectionModel().getSelected();
		if(this.modelInstance !== undefined && this.modelInstance != null){
			//alert(this.modelInstance.data.modelInstId);
			if(this.modelInstance.data.modelInstId === undefined){
				alert('Save Model Instance first');
				return;
			}
		}
		//loads selected resources
		var sm = this.resourcesGrid.getSelectionModel();
		var rows = sm.getSelections();

		
		var jsonStr = '[';
		if(rows != undefined && rows != null && rows.length >0){
			Ext.each(rows, function(row, index) {

				this.resId = row.data.resourceId;
				jsonStr += '{id: '+row.data.resourceId+'}';
				jsonStr +=',';		

			});
		}
		jsonStr += ']';
			
		var params = {
				ids : jsonStr,
				modelInstId: this.modelInstance.data.modelInstId
		};
		Ext.Ajax.request({
	          url: this.resSaveService,
	          params: params,
	          method: 'GET',
	          success: function(response, options) {
	          	
				if (response !== undefined) {		
	      			var content = Ext.util.JSON.decode( response.responseText );
	      			alert(LN('sbi.generic.resultMsg'));
				 } 	
	          }
	          ,failure : function(response) {
					if(response.responseText !== undefined) {
						alert(LN('sbi.generic.savingItemError'));
					}
				}
	          ,scope: this
	    });
		
	}
});
