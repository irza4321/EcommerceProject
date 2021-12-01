
    const fnameRules=[
      (v) => !!v || " first Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ];

    const lnameRules= [
      (v) => !!v || " last Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ];
   
     
    
    const passwordRules = [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must have 5+ characters",
    ];
    
   const usernameRules= [
      (v) => !!v || " User Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ];
    const emailRules= [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];

    export  {fnameRules, lnameRules,usernameRules, emailRules,passwordRules}