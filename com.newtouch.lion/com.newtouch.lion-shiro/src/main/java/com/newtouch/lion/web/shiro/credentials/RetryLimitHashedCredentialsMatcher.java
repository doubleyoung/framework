/*
 * Copyright (c)  2014, Newtouch
 * All rights reserved. 
 *
 * $id: RetryLimitHashedCredentialsMatcher.java 9552 2014年12月29日 下午3:39:19 WangLijun$
 */
package com.newtouch.lion.web.shiro.credentials;

import java.util.concurrent.atomic.AtomicInteger;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.cache.Cache;
import org.apache.shiro.cache.CacheManager;

import com.newtouch.lion.common.constant.Constants;


/**
 * <p>
 * Title:用户登录密码校验
 * </p>
 * <p>
 * Description:登录登录密码校验
 * </p>
 * <p>
 * Copyright: Copyright (c) 2014
 * </p>
 * <p>
 * Company: Newtouch
 * </p>
 * 
 * @author WangLijun
 * @version 1.0
 */
public class   RetryLimitHashedCredentialsMatcher extends HashedCredentialsMatcher {
	/**密码*/
    private Cache<String, AtomicInteger> passwordRetryCache;
    /**密码重试最大次数*/
    private Integer retryMaxCount=Constants.PASSWORD_RETYR_MAXCOUNT;
    /**密码重试缓存*/
    public RetryLimitHashedCredentialsMatcher(CacheManager cacheManager) {
        passwordRetryCache = cacheManager.getCache(com.newtouch.lion.web.shiro.constant.Constants.PASSWORD_RERTY_CACHE);
    }

    @Override
    public boolean doCredentialsMatch(AuthenticationToken token, AuthenticationInfo info) {
        String username = (String)token.getPrincipal();
        //retry count + 1
        AtomicInteger retryCount = passwordRetryCache.get(username);
        if(retryCount == null) {
            retryCount = new AtomicInteger(0);
            passwordRetryCache.put(username, retryCount);
        }
        
        if(retryCount.incrementAndGet() > this.retryMaxCount) {
            //if retry count > 5 throw
            throw new ExcessiveAttemptsException();
        }

        boolean matches = super.doCredentialsMatch(token, info);
        
        if(matches) {
            //clear retry count
            passwordRetryCache.remove(username);
        }
        return matches;
    }

	/**
	 * @return the retryMaxCount 密码最大重试次数
	 */
	public Integer getRetryMaxCount() {
		return retryMaxCount;
	}

	/**
	 * @param retryMaxCount the 密码最大重试次数 to set
	 */
	public void setRetryMaxCount(Integer retryMaxCount) {
		this.retryMaxCount = retryMaxCount;
	}
    
    

}
