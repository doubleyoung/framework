var logdg=''; 
$(function() {
	//加载bootstrap
	Metronic.init(); // init metronic core componets
	Layout.init(); // init layout
	Tasks.initDashboardWidget(); // init tash dashboard widget
  lion.util.menu();//加载导航栏
   //初始化日期
   $(".date-picker").datepicker({
      autoclose: true,
      language:'zh-CN'
   });
  logdg=$('#sys_login_log_list_tb');

  var  queryForm=$('#queryform');
	/**
	 * [查询]
	 */
	 $('#btnQuery').click(function(){
        //添加查询参数
	      logdg.datagrids({querydata:queryForm.serializeObject()});
	      //重新加载数据
	      logdg.datagrids('reload'); 
	 });
 
	 //刷新
	 $('#btnRefresh').on('click',function(){
		 logdg.datagrids('reload'); 
	 });
	 //重置
	 $('#btnReset').on('click',function(){
		 queryForm.reset();
	 });
	 
	//导出Excel
	 $('#btnExport').on('click',function(){
	     var params=queryForm.serialize(),
          dgtableId=logdg.attr('id');
          lion.web.exportfn({url:'export.json',data:params,tableId:dgtableId});
         return;
	 });
	
});
