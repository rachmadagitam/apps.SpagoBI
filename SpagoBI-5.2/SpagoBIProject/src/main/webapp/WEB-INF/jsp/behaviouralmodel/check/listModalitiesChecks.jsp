<%-- SpagoBI, the Open Source Business Intelligence suite

Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. --%>
 
  


<%@ include file="/WEB-INF/jsp/commons/portlet_base.jsp"%>
<% if (userProfile.isAbleToExecuteAction(SpagoBIConstants.CONTSTRAINT_MANAGEMENT)||userProfile.isAbleToExecuteAction(SpagoBIConstants.CONTSTRAINT_VIEW)) {%>

<spagobi:list moduleName="ListModalitiesChecksModule"/>
<br/>
<spagobi:list moduleName="ListPredefinedChecksModule" filter="disabled"/>
<% } %>