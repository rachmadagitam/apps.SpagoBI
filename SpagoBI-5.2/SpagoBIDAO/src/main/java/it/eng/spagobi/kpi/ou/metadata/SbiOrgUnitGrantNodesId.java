/* SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. */
package it.eng.spagobi.kpi.ou.metadata;
// Generated 21-set-2010 12.29.29 by Hibernate Tools 3.1.0 beta3



/**
 * SbiOrgUnitGrantNodesId generated by hbm2java
 */

public class SbiOrgUnitGrantNodesId  implements java.io.Serializable {


    // Fields    

     private Integer nodeId;
     private Integer kpiModelInstNodeId;
     private Integer grantId;


    // Constructors

    /** default constructor */
    public SbiOrgUnitGrantNodesId() {
    }

    
    /** full constructor */
    public SbiOrgUnitGrantNodesId(Integer nodeId, Integer kpiModelInstNodeId, Integer grantId) {
        this.nodeId = nodeId;
        this.kpiModelInstNodeId = kpiModelInstNodeId;
        this.grantId = grantId;
    }
    

   
    // Property accessors

    public Integer getNodeId() {
        return this.nodeId;
    }
    
    public void setNodeId(Integer nodeId) {
        this.nodeId = nodeId;
    }

    public Integer getKpiModelInstNodeId() {
        return this.kpiModelInstNodeId;
    }
    
    public void setKpiModelInstNodeId(Integer kpiModelInstNodeId) {
        this.kpiModelInstNodeId = kpiModelInstNodeId;
    }

    public Integer getGrantId() {
        return this.grantId;
    }
    
    public void setGrantId(Integer grantId) {
        this.grantId = grantId;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof SbiOrgUnitGrantNodesId) ) return false;
		 SbiOrgUnitGrantNodesId castOther = ( SbiOrgUnitGrantNodesId ) other; 
         
		 return ( (this.getNodeId()==castOther.getNodeId()) || ( this.getNodeId()!=null && castOther.getNodeId()!=null && this.getNodeId().equals(castOther.getNodeId()) ) )
 && ( (this.getKpiModelInstNodeId()==castOther.getKpiModelInstNodeId()) || ( this.getKpiModelInstNodeId()!=null && castOther.getKpiModelInstNodeId()!=null && this.getKpiModelInstNodeId().equals(castOther.getKpiModelInstNodeId()) ) )
 && ( (this.getGrantId()==castOther.getGrantId()) || ( this.getGrantId()!=null && castOther.getGrantId()!=null && this.getGrantId().equals(castOther.getGrantId()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getNodeId() == null ? 0 : this.getNodeId().hashCode() );
         result = 37 * result + ( getKpiModelInstNodeId() == null ? 0 : this.getKpiModelInstNodeId().hashCode() );
         result = 37 * result + ( getGrantId() == null ? 0 : this.getGrantId().hashCode() );
         return result;
   }   





}
