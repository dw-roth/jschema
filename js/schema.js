var dataSchema = (function () {

    tv4.addFormat('email', function (data, schema) {
        if (typeof data === 'string' && /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data)) {
            return null;
        }
        return "invalid email address";
    });



    return {
        getSchema: function() {
            return  {
                "$schema": "http://json-schema.org/schema#",
                "description": "a test object schema",
                "properties": {
                    "firstName": {
                        "description": "First Name",
                        "type": "string",
                        "minLength": 1
                    },
                    "lastName": {
                        "description": "Last Name",
                        "type": "string"
                    },
                    "gender": {
                        "description": "Gender",
                        "type": "string"
                    },
                    "dob": {
                        "description": "Date of Birth",
                        "type": "string"
                    },
                    "phone": {
                        "description": "Phone Number",
                        "type": "string",
                        "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
                    },
                    "email": {
                        "description": "Email Address",
                        "type": "string",
                        "format": "email"
                    }
                },
                "required": ["firstName", "lastName", "dob", "phone"]
            };
        },

        validate: function(data, schema) {
            return tv4.validate(data, schema);
        },

        getLastError: function () {
            return tv4.error;
        }
    };
})();
