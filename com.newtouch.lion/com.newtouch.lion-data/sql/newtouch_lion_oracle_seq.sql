
DROP SEQUENCE SEQ_BAS_APP_PROPERTIES_ID;
DROP SEQUENCE SEQ_BAS_CODE_TYPE_ID;
DROP SEQUENCE SEQ_BAS_COLUMN_ID;
DROP SEQUENCE SEQ_BAS_DATAGRID_ID;
DROP SEQUENCE SEQ_BAS_DEMO_ID;
DROP SEQUENCE SEQ_BAS_DEPARTMENT_ID;
DROP SEQUENCE SEQ_BAS_ICON_ID;
DROP SEQUENCE SEQ_BAS_LOGIN_LOG_ID;
DROP SEQUENCE SEQ_BAS_PARAMETER_ID;
DROP SEQUENCE SEQ_BAS_POSITION_ID;
DROP SEQUENCE SEQ_BAS_RESOURCE_ID;
DROP SEQUENCE SEQ_BAS_ROLE_ID;
DROP SEQUENCE SEQ_BAS_TIPTEXT_ID;
DROP SEQUENCE SEQ_BAS_USER_ID;
DROP SEQUENCE SEQ_BAS_GROUP_ID;
DROP SEQUENCE SEQ_BAS_CODE_LIST_ID;

CREATE SEQUENCE  SEQ_BAS_CODE_LIST_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_GROUP_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_USER_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_TIPTEXT_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_ROLE_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_RESOURCE_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_POSITION_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_PARAMETER_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE;
CREATE SEQUENCE  SEQ_BAS_LOGIN_LOG_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_ICON_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_DEPARTMENT_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_DEMO_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_DATAGRID_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_COLUMN_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_CODE_TYPE_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;
CREATE SEQUENCE  SEQ_BAS_APP_PROPERTIES_ID  MINVALUE 1000 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1000 CACHE 100 NOORDER  NOCYCLE ;