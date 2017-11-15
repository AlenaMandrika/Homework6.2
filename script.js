function User(nameUser, ageUser, sexUser) {
    this.nameUser = nameUser || 'nameUser';

    var name = nameUser;
    var age = +ageUser || 0;

    (function () {
        if (sexUser === 'men') {
            name = 'mr' + nameUser
        }
        if (sexUser === 'women') {
            name = 'ms' + name
        }

    })();
    
    function isAdult (age) {
        return age > 17
    }
    return {
        getNameUser: function () {
            return name || 'Bublik'
        },

        setName: function (newName) {
            if (typeof newName === 'string' && newName.length > 3) {
                name = newName;
                return name;
            }
            else {
                return new Error('too short')
            }
        },

        getSecretFiles: function () {
            if (isAdult(age)) {
                return 'some strage files'
            } else {
                return new Error('you are too young')
            }
        }
    }
}

var Alena = new User('Alena', '33', 'women');



