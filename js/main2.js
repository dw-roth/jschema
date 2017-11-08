//https://jsonschema-dw-roth1.c9users.io/index.html


(function () {
    
    let schema = dataSchema.getSchema();

    
    // function to create form
    for(let k in schema.properties){
        $('#jsonform').append(`<label for="${k}">${schema.properties[k].description}</label>
                    <input type="text" name="${k}" id="${k}"/>
                    <br/>`);
    }
    
    $('#jsonform').append(`<input type="submit" value="Submit" id="submitBtn">`);
    
    // end func
    
    
    
    $("#jsonform").submit(function(e){
        e.preventDefault();
       
        let formObj = {};
        formObj = formToObj('#jsonform')
        if(dataSchema.validate(formObj, schema)){
            window.alert('Submitted');
        }
        else{
            let lastError = dataSchema.getLastError();
            console.log(lastError);
            window.alert(lastError);
        }
        
    });
    
    function formToObj(formId){
        let formArr = $(formId).serializeArray();
        console.log(formArr);
        let formObj = {};-9
        for(let i=0; i<formArr.length; i++){
            formObj[formArr[i]['name']]=formArr[i]['value'];
        }
        return formObj; 
    }
    
})();










