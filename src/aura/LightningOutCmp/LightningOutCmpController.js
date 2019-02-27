({
    doAction : function(component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            if(params.msg !=null) 
            {
             component.set("v.msgDisplay",params.msg);
             var msgdiv = component.find("msgDiv").getElement();
             msgdiv.style = "color:red";
            }
        }
        
    }
})