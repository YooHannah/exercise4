describe('this', function () {
  it('setTimeout', function (done) {
    var obj = {
      say: function () {
        setTimeout(() => {
          // this 是什么？想想为什么？
          this.should.equal(obj) //setTimeout 第一个参数函数里面的this
          done()
        }, 0)
      }
    }
    obj.say()
  })

 it('global', function () {
    var obj=null;
    function test() {
      // this 是什么？想想为什么？
      this.should.equal(null)
    }
    test.bind(obj);
  })

  describe('bind', function () {
    it('bind undefined', function () {
      var obj = {
        say: function () {
          var that=this;
          function _say() {
            // this 是什么？想想为什么？this指向window·
            that.should.equal(null)
          }
          return _say.bind(obj)
        }()
      }
      var temp = null;
      obj.say.bind(temp);
    })

    it('bind normal', function () {
      var obj = {}
      obj.say = function () {
        function _say() {
          // this 是什么？想想为什么？this指向调用say函数的对象
          this.should.equal(null)
        }
        return _say.bind(obj)
      }()
      var temp = null;
      obj.say.bind(temp);
      // obj.say();
    })

  })
})