function Person(name) {
    
    var _age = 0;       // 私有屬性
    var _name ='';

    this.Nation = 'TW';

    this.Name = name;   // 公開屬性

    // 公開方法
    this.SayHelloTo = function (name) {
        Hello(name);
        
    };

    this.getAge = function () {
        return _age;
    };

    this.setAge = function (val) {
        _age = val;

        // fire event
        if (this.OnAfterSetAge != null && (typeof this.OnAfterSetAge === "function"))
            this.OnAfterSetAge();
    };

    // Event
    this.OnAfterSetAge = null;

    // 私有方法
    function Hello(name) {
        console.log('Person say hello to' + name);
    }
}