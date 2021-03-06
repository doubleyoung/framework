/*
* Copyright (c)  2015, Newtouch
* All rights reserved. 
*
* $id: CacheMontiorController.java 9552 2015年2月28日 下午4:35:18 WangLijun$
*/
package com.newtouch.lion.admin.web.controller.monitor; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.newtouch.lion.model.cache.CacheManagerModel;
import com.newtouch.lion.service.cache.ApplicationCacheManager;
import com.newtouch.lion.web.controller.AbstractController;

/**
 * <p>
 * Title: 缓存监控信息
 * </p>
 * <p>
 * Description: 缓存监控信息
 * </p>
 * <p>
 * Copyright: Copyright (c) 2015
 * </p>
 * <p>
 * Company: Newtouch
 * </p>
 * 
 * @author WangLijun
 * @version 1.0
 */
@Controller
@RequestMapping("/monitor/cache")
public class CacheMonitorController extends AbstractController{
	
	@Autowired
	private ApplicationCacheManager applicationCacheManager;
	/***
	 *缓存监控首页
	 */
	private static final String INDEX_RETRUN="/monitor/cache/index";
	
	@RequestMapping(value="/index",method=RequestMethod.GET)
	public String index(Model model){
		CacheManagerModel managerModel=applicationCacheManager.getCaches();
		model.addAttribute("managerModel",managerModel);
		return INDEX_RETRUN;
	}
}

	