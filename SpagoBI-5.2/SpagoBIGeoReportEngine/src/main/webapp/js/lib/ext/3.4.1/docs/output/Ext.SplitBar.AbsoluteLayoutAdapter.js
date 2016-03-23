/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
Ext.data.JsonP.Ext_SplitBar_AbsoluteLayoutAdapter({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":"Ext.SplitBar.BasicLayoutAdapter","uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.SplitBar.BasicLayoutAdapter' rel='Ext.SplitBar.BasicLayoutAdapter' class='docClass'>Ext.SplitBar.BasicLayoutAdapter</a><div class='subclass '><strong>Ext.SplitBar.AbsoluteLayoutAdapter</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter' target='_blank'>SplitBar.js</a></div></pre><div class='doc-contents'><p>Adapter that  moves the splitter element to align with the resized sizing element.\nUsed with an absolute positioned SplitBar.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-BOTTOM' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar.AbsoluteLayoutAdapter'>Ext.SplitBar.AbsoluteLayoutAdapter</span><br/><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter-static-property-BOTTOM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.AbsoluteLayoutAdapter-static-property-BOTTOM' class='name not-expandable'>BOTTOM</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>Placement constant - The resizing element is positioned under splitter element</p>\n</div><div class='long'><p>Placement constant - The resizing element is positioned under splitter element</p>\n</div></div></div><div id='static-property-HORIZONTAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar.AbsoluteLayoutAdapter'>Ext.SplitBar.AbsoluteLayoutAdapter</span><br/><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter-static-property-HORIZONTAL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.AbsoluteLayoutAdapter-static-property-HORIZONTAL' class='name not-expandable'>HORIZONTAL</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>Orientation constant - Create a horizontal SplitBar</p>\n</div><div class='long'><p>Orientation constant - Create a horizontal SplitBar</p>\n</div></div></div><div id='static-property-LEFT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar.AbsoluteLayoutAdapter'>Ext.SplitBar.AbsoluteLayoutAdapter</span><br/><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter-static-property-LEFT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.AbsoluteLayoutAdapter-static-property-LEFT' class='name not-expandable'>LEFT</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>Placement constant - The resizing element is to the left of the splitter element</p>\n</div><div class='long'><p>Placement constant - The resizing element is to the left of the splitter element</p>\n</div></div></div><div id='static-property-RIGHT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar.AbsoluteLayoutAdapter'>Ext.SplitBar.AbsoluteLayoutAdapter</span><br/><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter-static-property-RIGHT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.AbsoluteLayoutAdapter-static-property-RIGHT' class='name not-expandable'>RIGHT</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>Placement constant - The resizing element is to the right of the splitter element</p>\n</div><div class='long'><p>Placement constant - The resizing element is to the right of the splitter element</p>\n</div></div></div><div id='static-property-TOP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar.AbsoluteLayoutAdapter'>Ext.SplitBar.AbsoluteLayoutAdapter</span><br/><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter-static-property-TOP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.AbsoluteLayoutAdapter-static-property-TOP' class='name not-expandable'>TOP</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>Placement constant - The resizing element is positioned above the splitter element</p>\n</div><div class='long'><p>Placement constant - The resizing element is positioned above the splitter element</p>\n</div></div></div><div id='static-property-VERTICAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar.AbsoluteLayoutAdapter'>Ext.SplitBar.AbsoluteLayoutAdapter</span><br/><a href='source/SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter-static-property-VERTICAL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.AbsoluteLayoutAdapter-static-property-VERTICAL' class='name not-expandable'>VERTICAL</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>Orientation constant - Create a vertical SplitBar</p>\n</div><div class='long'><p>Orientation constant - Create a vertical SplitBar</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getElementSize' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.SplitBar.BasicLayoutAdapter' rel='Ext.SplitBar.BasicLayoutAdapter' class='defined-in docClass'>Ext.SplitBar.BasicLayoutAdapter</a><br/><a href='source/SplitBar.html#Ext-SplitBar-BasicLayoutAdapter-method-getElementSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.BasicLayoutAdapter-method-getElementSize' class='name expandable'>getElementSize</a>( <span class='pre'>s</span> )</div><div class='description'><div class='short'>Called before drag operations to get the current size of the resizing element. ...</div><div class='long'><p>Called before drag operations to get the current size of the resizing element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a><div class='sub-desc'><p>The SplitBar using this adapter</p>\n</div></li></ul></div></div></div><div id='method-setElementSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.SplitBar.BasicLayoutAdapter' rel='Ext.SplitBar.BasicLayoutAdapter' class='defined-in docClass'>Ext.SplitBar.BasicLayoutAdapter</a><br/><a href='source/SplitBar.html#Ext-SplitBar-BasicLayoutAdapter-method-setElementSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar.BasicLayoutAdapter-method-setElementSize' class='name expandable'>setElementSize</a>( <span class='pre'>s, newSize, onComplete</span> )</div><div class='description'><div class='short'>Called after drag operations to set the size of the resizing element. ...</div><div class='long'><p>Called after drag operations to set the size of the resizing element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a><div class='sub-desc'><p>The SplitBar using this adapter</p>\n</div></li><li><span class='pre'>newSize</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new size to set</p>\n</div></li><li><span class='pre'>onComplete</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A function to be invoked when resizing is complete</p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":["Ext.SplitBar.BasicLayoutAdapter"],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[{"tagname":"property","owner":"Ext.SplitBar.AbsoluteLayoutAdapter","meta":{"static":true},"name":"BOTTOM","id":"static-property-BOTTOM"},{"tagname":"property","owner":"Ext.SplitBar.AbsoluteLayoutAdapter","meta":{"static":true},"name":"HORIZONTAL","id":"static-property-HORIZONTAL"},{"tagname":"property","owner":"Ext.SplitBar.AbsoluteLayoutAdapter","meta":{"static":true},"name":"LEFT","id":"static-property-LEFT"},{"tagname":"property","owner":"Ext.SplitBar.AbsoluteLayoutAdapter","meta":{"static":true},"name":"RIGHT","id":"static-property-RIGHT"},{"tagname":"property","owner":"Ext.SplitBar.AbsoluteLayoutAdapter","meta":{"static":true},"name":"TOP","id":"static-property-TOP"},{"tagname":"property","owner":"Ext.SplitBar.AbsoluteLayoutAdapter","meta":{"static":true},"name":"VERTICAL","id":"static-property-VERTICAL"}],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"SplitBar.html#Ext-SplitBar-AbsoluteLayoutAdapter","filename":"SplitBar.js"}],"linenr":345,"members":{"property":[],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Ext.SplitBar.BasicLayoutAdapter","meta":{},"name":"getElementSize","id":"method-getElementSize"},{"tagname":"method","owner":"Ext.SplitBar.BasicLayoutAdapter","meta":{},"name":"setElementSize","id":"method-setElementSize"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.SplitBar.AbsoluteLayoutAdapter","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.SplitBar.AbsoluteLayoutAdapter","mixins":[],"mixedInto":[]});