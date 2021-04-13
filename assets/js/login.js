$(function(){
 $('#register').on('click',function(){
     $('.register-box').show()
     $('.login-box').hide()
 })
 $('#login').on('click',function(){
    $('.login-box').show()
    $('.register-box').hide()
})
var layer = layui.layer
var form = layui.form
form.verify({
    psw: [/^[\S]{6,12}$/,'密码必须为6-12位且不能为空'
    ],

    repsw: function(value){
        var val = $('.register-box [name=password]').val()
        if(val !== value)
        {
            return '两次输入的密码不一致'
        }
    }
})
$('#form_reg').on('submit',function(e){
    //阻止表单的默认提交行为
    e.preventDefault()
    //发起post请求
    $.post(
        'http://ajax.frontend.itheima.net/api/reguser',
        {username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=passsword]').val()},
        function(res){
            if(res.status !== 0)
            {
                return layer.message(res.message)
            }
            else
            {
            layer.message("注册成功，请登录！")
            $('#login').click()
            }
        }
    )
})
}
)