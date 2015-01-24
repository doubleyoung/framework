$(function() {
	//加载bootstrap
	Metronic.init(); // init metronic core componets
	Layout.init(); // init layout
	Tasks.initDashboardWidget(); // init tash dashboard widget
	
	var datagridId='#sys_parameter_lists_tb';

	var addForm=$("#sysParameterForm");
	var addDialog=$("#basic");
	
	
	handleVForm(addForm,submitForm);
	//选择DataGrid单行
	function getSelectedRow(){return $(datagridId).datagrid('getSelected');}
	 
	$(datagridId).datagrid({
		onLoadSuccess : function(data) {
		}
	});
		
	 //重新加载DataGrid
	 function dataGridReload(dataGridId){
		$(datagridId).datagrid('reload');
	 }
	 //刷新
	 $('#btnRefresh').on('click',function(){
		 dataGridReload($.sys.parameter.datagridId);
	 });
	 //新增
	 $('#btnAdd').on('click',function(){
		addForm[0].reset();
		addForm.find('.form-group').removeClass('has-error');
		addForm.find('.help-block').remove();
		$('.lion-combo').combo('reloadLi');
	 });

	 addForm.on('show.bs.modal',function(){
	 	addForm[0].reset();
	 	 
	 });
	 
	 $('#editDialog').on('hidden.bs.modal', function() {
		  $(this).removeData('bs.modal');
	 });


	 $('#btnSave').click(function(){
	 		console.log('提交成功');
	 		addForm.submit();
	 });



	 //编辑
	 $('#btnEdit').on('click',function(){
		 console.log('进入BtnEdit function');
		 var  loadPageUrl='/admin/system/parameter/dialogedit.htm?timestamp=' +(new Date()).getTime();
		 modalDialog=new lion.ui.dialog(
		 {id:'addDialog',
			title:"编辑系统参数",
			titleIcon:'fa-plus bule',
			btnalign:'center',
			loadurl:loadPageUrl,
			backdrop:'true',
			buttons:[
	    			{id:'btnCancel',value:' 取 消 ',dismiss:'true',icon:'fa fa-save'},
	    			{id:'btnSave',headler:function(){ },icon:'fa fa-save',className:'btn blue',value:' 确 认 ',dismiss:false},
		 			]
		  });
		  
	 });
	 //删除
	 $('#btnDelete').on('click',function(){
		 var row=getSelectedRow();
		 if(!row){
			 $.lionui.notice.info('提示','请选择要删除记录');
			 return;
		 }
		 bootbox.confirm('确认要删除此记录？', function(result) {
              if(result){
            	 
            	  var ps = '?id='+row.id;
					//$.post('delete.htm' + ps, function(data) {
					//	var dataJson=eval('(' + data + ')');
					//	//parent.$.topCenterMsgBox(dataJson.message);
					//	dataGridReload();
					//	dataGridReload($.sys.parameter.datagridId);
					//});
            	  $.lionui.notice.success('提示!', '已删除成功');
              }
          }); 
	 });
	 //导出Excel
	 $('#btnExport').on('click',function(){
		 alert('dd');
	 });
});
/**新增或编辑的提交代码*/
function submitForm(frm){
	var param=frm.serialize();
	console.log(param);
 	console.dir(this);
}

//验证表单
handleVForm=function(vForm,submitCallBackfn){
	var addError = $('.alert-danger', vForm);
    var addSuccess = $('.alert-success',vForm);
	vForm.validate({
        errorElement: 'span',
        errorClass: 'help-block help-block-error', 
        focusInvalid: false, 
        onkeyup:false,
        ignore: "", 
        messages: {
        	type:{
        		required:'请选择参数类型'
        	},
        	nameZh:{
        		required:'请输入参数名称(中文)',
        		rangelength:jQuery.validator.format("参数名称(中文)长度为{0}和{1}字符之间")
        	},
            nameEn:{
        		required:'请输入参数名称(英文)',
        		rangelength:jQuery.validator.format("参数名称(英文)长度为{0}和{1}字符之间")
        	},
        	value:{
        		required:'请输入参数值',
        	 	rangelength:jQuery.validator.format("参数值必须介于{0}和{1}字符之间")
        	},
        	description:{
        		required:'请输入参数的描述',
        		maxlength:jQuery.validator.format("参数的的最大长度为:{0}"),
        	}
        },
        rules: {
            type:{
                required:true
            },
            nameZh: {
                required:true,
                rangelength:[4,128]
            },
            nameEn:{
            	required: true,
              	rangelength:[4,128]
            },
            value:{
            	required: true,
                rangelength:[4,128]
            },
            description:{
            	required:false,
            	maxlength:512
            }
        },
        invalidHandler: function (event, validator) {             
            addSuccess.hide();
            addError.show();
            Metronic.scrollTo(addError, -200);
        },

        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error'); 
        },

        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error'); 
        },
        success: function (label) {
            label.closest('.form-group').removeClass('has-error'); 
        },
        errorPlacement:function(error,element){
        	//当遇到combo的对话框架的时，修改它的显示位置
        	if (element.hasClass('lion-combo')){        	 
        		error.insertAfter(element.parent().find('div.btn-group'));
        	}else{
        		error.insertAfter(element);
        	}
        },
        submitHandler: function (form) {
            addSuccess.show();
            addError.hide();
            submitCallBackfn(vForm);
        }
    });
};
//获取下拉列表数据
/**sys_code_type 加载列表*/
function formatterCodeList(val,row) {
	var codeText='',data=$('#parameterCodeList').combo('getData');
	for (var i in data) {
		if (data[i].codeValue ==val) {
			codeText = data[i].nameZh;
			break;
		}
	}
	return codeText;
}
//判断是否编辑
function formatterEidtable(val,row) {
	var name =$.loin.lang.editable.n;
	if (val) {
		name = $.loin.lang.editable.y;
	}
	return name;
}