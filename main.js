var userObj = {
    firstName: "kishor",
    lastName: "naik",
    communication: {
        mobile: "11111111",
        email: "kishor@gmail.com"
    },
    onDisplay: function () {
        console.log(this.firstName);
        console.log(this.lastName);
        if (this.communication != null) {
            console.log(this.communication.email);
            console.log(this.communication.mobile);
        }
        console.log(this.age);

    }
}

userObj.onDisplay();

// Delete Communication Property
delete userObj.communication;

userObj.onDisplay();

// Add New Property
userObj.age = 35;

userObj.onDisplay();

