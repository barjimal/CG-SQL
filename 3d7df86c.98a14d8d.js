(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{120:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return T}));var _=e(0),r=e.n(_);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(n);t&&(_=_.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,_)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,_,r=function(n,t){if(null==n)return{};var e,_,r={},a=Object.keys(n);for(_=0;_<a.length;_++)e=a[_],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(_=0;_<a.length;_++)e=a[_],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var m=r.a.createContext({}),p=function(n){var t=r.a.useContext(m),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},l=function(n){var t=p(n.components);return r.a.createElement(m.Provider,{value:t},n.children)},E={inlineCode:"code",wrapper:function(n){var t=n.children;return r.a.createElement(r.a.Fragment,{},t)}},c=r.a.forwardRef((function(n,t){var e=n.components,_=n.mdxType,a=n.originalType,s=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),l=p(e),c=_,T=l["".concat(s,".").concat(c)]||l[c]||E[c]||a;return e?r.a.createElement(T,o(o({ref:t},m),{},{components:e})):r.a.createElement(T,o({ref:t},m))}));function T(n,t){var e=arguments,_=t&&t.mdxType;if("string"==typeof n||_){var a=e.length,s=new Array(a);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=n,o.mdxType="string"==typeof n?n:_,s[1]=o;for(var m=2;m<a;m++)s[m]=e[m];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,e)}c.displayName="MDXCreateElement"},72:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return s})),e.d(t,"metadata",(function(){return o})),e.d(t,"rightToc",(function(){return i})),e.d(t,"default",(function(){return p}));var _=e(2),r=e(6),a=(e(0),e(120)),s={id:"x2",title:"Appendix 2: CQL Grammar",sidebar_label:"Appendix 2: CQL Grammar"},o={unversionedId:"x2",id:"x2",isDocsHomePage:!1,title:"Appendix 2: CQL Grammar",description:"\x3c!---",source:"@site/../CQL_Guide/x2.md",slug:"/x2",permalink:"/cql-guide/x2",version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1607415275,sidebar_label:"Appendix 2: CQL Grammar",sidebar:"someSidebar",previous:{title:"Appendix 1: Command Line Options",permalink:"/cql-guide/x1"},next:{title:"Appendix 3: Control Directives",permalink:"/cql-guide/x3"}},i=[{value:"Operators and Literals",id:"operators-and-literals",children:[]},{value:"Statement/Type Keywords",id:"statementtype-keywords",children:[]},{value:"Rules",id:"rules",children:[]}],m={rightToc:i};function p(n){var t=n.components,e=Object(r.a)(n,["components"]);return Object(a.b)("wrapper",Object(_.a)({},m,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"What follows is taken from a grammar snapshot with the tree building rules removed.\nIt should give a fair sense of the syntax of CQL (but not semantic validation)."),Object(a.b)("p",null,"Snapshot as of Fri Oct  9 13:41:39 PDT 2020"),Object(a.b)("h3",{id:"operators-and-literals"},"Operators and Literals"),Object(a.b)("p",null,"These are in order of priority lowest to highest"),Object(a.b)("pre",null,Object(a.b)("code",Object(_.a)({parentName:"pre"},{}),"UNION_ALL UNION INTERSECT EXCEPT\nASSIGN\nOR\nAND\nBETWEEN\nNOT\n'<>' '!=' '=' '==' LIKE NOT_LIKE GLOB MATCH REGEXP IN IS_NOT IS\n'<' '>' '>=' '<='\n'<<' '>>' '&' '|'\n'+' '-'\n'*' '/' '%'\nUMINUS '~' COLLATE\nCONCAT\n")),Object(a.b)("p",null,"NOTE: The above varies considerably from the C binding order!!!"),Object(a.b)("p",null,"Literals:"),Object(a.b)("pre",null,Object(a.b)("code",Object(_.a)({parentName:"pre"},{}),"ID  /* a name */\nSTRLIT /* a string literal in SQL format e.g. 'it''s sql' */\nCSTRLIT /* a string literal in C format e.g. \"hello, world\\n\" */\nBLOBLIT /* a blob literal in SQL format e.g. x'12ab' */\nINTLIT /* integer literal */\nLONGLIT /* long integer literal */\nREALLIT /* floating point literal */\n")),Object(a.b)("h3",{id:"statementtype-keywords"},"Statement/Type Keywords"),Object(a.b)("pre",null,Object(a.b)("code",Object(_.a)({parentName:"pre"},{}),"EXCLUDE_GROUP EXCLUDE_CURRENT_ROW EXCLUDE_TIES EXCLUDE_NO_OTHERS CURRENT_ROW UNBOUNDED PRECEDING FOLLOWING\nCREATE DROP TABLE WITHOUT ROWID PRIMARY KEY NULL_ DEFAULT AT_DUMMY_SEED\nOBJECT TEXT BLOB LONG_ INT_ INTEGER LONG_INTEGER REAL ON UPDATE CASCADE ON_CONFLICT DO NOTHING\nDELETE INDEX FOREIGN REFERENCES CONSTRAINT UPSERT STATEMENT\nINSERT INTO VALUES VIEW SELECT QUERY_PLAN EXPLAIN OVER WINDOW FILTER PARTITION RANGE ROWS GROUPS\nAS CASE WHEN FROM THEN ELSE END LEFT\nOUTER JOIN WHERE GROUP BY ORDER ASC\nDESC INNER FCOUNT AUTOINCREMENT DISTINCT\nLIMIT OFFSET TEMP TRIGGER IF ALL CROSS USING RIGHT\nUNIQUE HAVING SET TO DISTINCTROW\nFUNC FUNCTION PROC PROCEDURE BEGIN_ OUT INOUT CURSOR CURSOR_FOR DECLARE FETCH LOOP LEAVE CONTINUE\nOPEN CLOSE ELSE_IF WHILE CALL TRY CATCH THROW RETURN\nSAVEPOINT ROLLBACK COMMIT TRANSACTION RELEASE ARGUMENTS\nCAST WITH RECURSIVE REPLACE IGNORE ADD COLUMN RENAME ALTER\nAT_ECHO AT_CREATE AT_RECREATE AT_DELETE AT_SCHEMA_UPGRADE_VERSION AT_PREVIOUS_SCHEMA AT_SCHEMA_UPGRADE_SCRIPT\nAT_FILE AT_ATTRIBUTE AT_SENSITIVE DEFERRED NOT_DEFERRABLE DEFERRABLE IMMEDIATE RESTRICT ACTION INITIALLY NO\nBEFORE AFTER INSTEAD OF FOR_EACH_ROW EXISTS RAISE FAIL ABORT AT_ENFORCE_STRICT AT_ENFORCE_NORMAL\nAT_BEGIN_SCHEMA_REGION AT_END_SCHEMA_REGION\nAT_DECLARE_SCHEMA_REGION AT_DECLARE_DEPLOYABLE_REGION AT_SCHEMA_AD_HOC_MIGRATION PRIVATE\n")),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("p",null,"Note that in many cases the grammar is more generous than the overall language and errors have to be checked on top of this, often this is done on purpose because even when it's possible it might be very inconvenient to do checks with syntax.  For example the grammar cannot enforce non-duplicate ids in id lists, but it could enforce non-duplicate attributes in attribute lists.  It chooses to do neither as they are easily done with semantic validation.  Thus the grammar is not the final authority on what constitutes a valid program but it's a good start."),Object(a.b)("pre",null,Object(a.b)("code",Object(_.a)({parentName:"pre"},{}),'\n\nprogram: opt_stmt_list\n  ;\n\nopt_stmt_list: /*nil*/\n  | stmt_list\n\nstmt_list: stmt \';\'\n  | stmt \';\' stmt_list\n  ;\n\nstmt: misc_attrs any_stmt\n\nany_stmt: select_stmt\n  | explain_stmt\n  | create_trigger_stmt\n  | create_table_stmt\n  | create_index_stmt\n  | create_view_stmt\n  | alter_table_add_column_stmt\n  | drop_table_stmt\n  | drop_view_stmt\n  | drop_index_stmt\n  | drop_trigger_stmt\n  | with_delete_stmt\n  | delete_stmt\n  | call_stmt\n  | with_insert_stmt\n  | insert_stmt\n  | with_update_stmt\n  | update_stmt\n  | update_cursor_stmt\n  | upsert_stmt\n  | with_upsert_stmt\n  | set_stmt\n  | create_proc_stmt\n  | declare_proc_stmt\n  | declare_func_stmt\n  | declare_stmt\n  | fetch_stmt\n  | fetch_values_stmt\n  | fetch_call_stmt\n  | fetch_cursor_stmt\n  | while_stmt\n  | loop_stmt\n  | leave_stmt\n  | return_stmt\n  | continue_stmt\n  | if_stmt\n  | open_stmt\n  | close_stmt \n  | out_stmt \n  | out_union_stmt \n  | throw_stmt \n  | trycatch_stmt \n  | begin_trans_stmt \n  | rollback_trans_stmt \n  | commit_trans_stmt \n  | savepoint_stmt \n  | release_savepoint_stmt \n  | echo_stmt \n  | schema_upgrade_version_stmt \n  | schema_upgrade_script_stmt \n  | previous_schema_stmt \n  | enforce_strict_stmt \n  | enforce_normal_stmt \n  | declare_schema_region_stmt \n  | declare_deployable_region_stmt \n  | begin_schema_region_stmt \n  | end_schema_region_stmt \n  | schema_ad_hoc_migration_stmt \n  ; \n \nexplain_stmt: "EXPLAIN" opt_query_plan explain_target  \n  ; \n \nopt_query_plan: /* nil */  \n  | "QUERY PLAN"  \n  ; \n \nexplain_target: select_stmt \n  | update_stmt \n  | delete_stmt \n  | with_delete_stmt \n  | with_insert_stmt \n  | insert_stmt \n  | upsert_stmt \n  | drop_table_stmt \n  | drop_view_stmt \n  | drop_index_stmt \n  | drop_trigger_stmt \n  | begin_trans_stmt \n  | commit_trans_stmt \n  ; \n \nprevious_schema_stmt: "@PREVIOUS_SCHEMA"  \n  ; \n \nschema_upgrade_script_stmt: "@SCHEMA_UPGRADE_SCRIPT"  \n  ; \n \nschema_upgrade_version_stmt: "@SCHEMA_UPGRADE_VERSION" \'(\' "integer-literal" \')\'  \n  ; \n \nset_stmt: "SET" name ":=" expr    \n  ; \n \nversion_attrs_opt_recreate: /* nil */  \n  | "@RECREATE"  \n  | "@RECREATE" \'(\' name \')\'   \n  | version_attrs  \n  ; \n \nopt_version_attrs: /* nil */  \n  | version_attrs  \n  ; \n \nversion_attrs: "@CREATE" version_annotation opt_version_attrs  \n  | "@DELETE" version_annotation opt_version_attrs  \n  ; \n \nopt_delete_version_attr: /* nil */  \n  | "@DELETE" version_annotation  \n  ; \n \ndrop_table_stmt: "DROP" "TABLE" "IF" "EXISTS" name  \n  | "DROP" "TABLE" name  \n  ; \n \ndrop_view_stmt: "DROP" "VIEW" "IF" "EXISTS" name  \n  | "DROP" "VIEW" name  \n  ; \n \ndrop_index_stmt: "DROP" "INDEX" "IF" "EXISTS" name  \n  | "DROP" "INDEX" name  \n  ; \n \ndrop_trigger_stmt: "DROP" "TRIGGER" "IF" "EXISTS" name  \n  | "DROP" "TRIGGER" name  \n  ; \n \ncreate_table_stmt: "CREATE" opt_temp "TABLE" opt_if_not_exists name \'(\' col_key_list \')\' opt_no_rowid version_attrs_opt_recreate  \n  ; \n \nopt_temp: /* nil */  \n  | "TEMP"  \n  ; \n \nopt_if_not_exists: /* nil */  \n  | "IF" "NOT" "EXISTS"  \n  ; \n \nopt_no_rowid: /* nil */  \n  | "WITHOUT" "ROWID"  \n  ; \n \ncol_key_list: col_key_def  \n  | col_key_def \',\' col_key_list   \n  ; \n \ncol_key_def: col_def \n  | pk_def \n  | fk_def \n  | unq_def \n  | "LIKE" name  \n  ; \n \ncol_name: name  \n  ; \n \nmisc_attr_key: name  \n  | name \':\' name  \n  ; \n \nmisc_attr_value_list: misc_attr_value  \n  | misc_attr_value \',\' misc_attr_value_list  \n  ; \n \nmisc_attr_value: name  \n  | any_literal  \n  | \'(\' misc_attr_value_list \')\'  \n  | \'-\' num_literal  \n  ; \n \nmisc_attr:  "@ATTRIBUTE" \'(\' misc_attr_key \')\'  \n  | "@ATTRIBUTE" \'(\' misc_attr_key \'=\' misc_attr_value \')\'  \n  ; \n \nmisc_attrs: /* nil */  \n  | misc_attr misc_attrs  \n  ; \n \ncol_def: misc_attrs col_name data_type col_attrs  \n  ; \n \npk_def: "PRIMARY" "KEY" \'(\' name_list \')\'   \n  ; \n \nopt_fk_options: /* nil */  \n  | fk_options  \n  ; \n \nfk_options: fk_on_options  \n  | fk_deferred_options  \n  | fk_on_options fk_deferred_options   \n  ; \n \nfk_on_options: \n    "ON" "DELETE" fk_action  \n  | "ON" "UPDATE" fk_action  \n  | "ON" "UPDATE" fk_action "ON" "DELETE" fk_action  \n  | "ON" "DELETE" fk_action "ON" "UPDATE" fk_action  \n  ; \n \nfk_action: \n    "SET" "NULL"  \n  | "SET" "DEFAULT"  \n  | "CASCADE"  \n  | "RESTRICT"  \n  | "NO" "ACTION"  \n  ; \n \nfk_deferred_options: \n    "DEFERRABLE" fk_initial_state  \n  | "NOT DEFERRABLE" fk_initial_state  \n  ; \n \nfk_initial_state: /* nil */  \n  | "INITIALLY" "DEFERRED"  \n  | "INITIALLY" "IMMEDIATE"  \n  ; \n \nfk_def: "FOREIGN" "KEY" \'(\' name_list \')\' fk_target_options  \n  ; \n \nfk_target_options : "REFERENCES" name \'(\' name_list \')\' opt_fk_options  \n  ; \n \nunq_def: "CONSTRAINT" name "UNIQUE" \'(\' name_list \')\'  \n  | "UNIQUE" \'(\' name_list \')\'  \n  ; \n \nopt_unique: /* nil */  \n  | "UNIQUE"  \n  ; \n \nindexed_column: name opt_asc_desc  \n  ; \n \nindexed_columns: indexed_column  \n  | indexed_column \',\' indexed_columns  \n  ; \n \ncreate_index_stmt: "CREATE" opt_unique "INDEX" opt_if_not_exists name "ON" name \'(\' indexed_columns \')\' opt_delete_version_attr  \n  ; \n \nname: "ID"  \n  | "TEXT"  \n  | "TRIGGER"  \n  | "ROWID"  \n  ; \n \nopt_name: /* nil */  \n  | name  \n  ; \n \nname_list: name  \n  |  name \',\' name_list   \n  ; \n \nopt_name_list: /* nil */  \n  | name_list  \n  ; \n \ncol_attrs: /* nil */  \n  | "NOT" "NULL" col_attrs  \n  | "PRIMARY" "KEY" col_attrs  \n  | "PRIMARY" "KEY" "AUTOINCREMENT" col_attrs  \n  | "DEFAULT" \'-\' num_literal col_attrs  \n  | "DEFAULT" num_literal col_attrs  \n  | "DEFAULT" str_literal col_attrs  \n  | "UNIQUE" col_attrs  \n  | "@SENSITIVE" col_attrs  \n  | "@CREATE" version_annotation col_attrs  \n  | "@DELETE" version_annotation col_attrs  \n  | fk_target_options col_attrs  \n  ; \n \nversion_annotation: \'(\' "integer-literal" \',\' name \')\'  \n  | \'(\' "integer-literal" \')\'  \n  ; \n \nobject_type: \n    "OBJECT"  \n  | "OBJECT" \'<\' name \'>\'  \n  ; \n \ndata_type: \n    "INT"  \n  | "INTEGER"  \n  | "TEXT"  \n  | "REAL"  \n  | "LONG"  \n  | "BOOL"  \n  | "LONG" "INTEGER"  \n  | "LONG" "INT"  \n  | "LONG_INT" | "LONG_INTEGER"  \n  | "BLOB"  \n  | object_type  \n  ; \n \ndata_type_opt_notnull: data_type  \n  | data_type "NOT" "NULL"  \n  | data_type "@SENSITIVE"  \n  | data_type "@SENSITIVE" "NOT" "NULL"  \n  | data_type "NOT" "NULL" "@SENSITIVE"   \n  ; \n \nstr_literal: "sql-string-literal"  \n  | "c-string-literal"  \n  ; \n \nnum_literal:  "integer-literal"  \n  | "long-literal"  \n  | "real-literal"  \n  ; \n \nany_literal: str_literal  \n  | num_literal  \n  | "NULL"  \n  | "@FILE" \'(\' str_literal \')\'  \n  | "sql-blob-literal"  \n  ; \n \nraise_expr: \n    "RAISE" \'(\' "IGNORE" \')\'   \n  | "RAISE" \'(\' "ROLLBACK" \',\'  expr \')\'  \n  | "RAISE" \'(\' "ABORT" \',\'  expr \')\'  \n  | "RAISE" \'(\' "FAIL" \',\'  expr \')\'  \n  ; \n \ncall: \n    name \'(\' arg_list \')\' opt_filter_clause  \n  | name \'(\' "DISTINCT" arg_list \')\' opt_filter_clause  \n  ; \n \nbasic_expr: name  \n  | name \'.\' name  \n  | any_literal  \n  | \'(\' expr \')\'  \n  | call  \n  | window_func_inv  \n  | raise_expr  \n  | \'(\' select_stmt \')\'  \n  | "EXISTS" \'(\' select_stmt \')\'  \n  ; \n \nmath_expr: basic_expr  \n  | math_expr \'&\' math_expr  \n  | math_expr \'|\' math_expr  \n  | math_expr "<<" math_expr  \n  | math_expr ">>"  math_expr  \n  | math_expr \'+\' math_expr  \n  | math_expr \'-\' math_expr  \n  | math_expr \'*\' math_expr  \n  | math_expr \'/\' math_expr  \n  | math_expr \'%\' math_expr  \n  | \'-\' math_expr   \n  | math_expr "||" math_expr  \n  ; \n \nexpr: basic_expr  \n  | expr \'&\' expr  \n  | expr \'|\' expr  \n  | expr "<<" expr  \n  | expr ">>" expr  \n  | expr \'+\' expr  \n  | expr \'-\' expr  \n  | expr \'*\' expr  \n  | expr \'/\' expr  \n  | expr \'%\' expr  \n  | \'-\' expr   \n  | "NOT" expr  \n  | \'~\' expr  \n  | expr "COLLATE" name  \n  | expr "AND" expr  \n  | expr "OR" expr  \n  | expr \'=\' expr  \n  | expr "==" expr  \n  | expr \'<\' expr  \n  | expr \'>\' expr  \n  | expr "<>" expr  \n  | expr "!=" expr  \n  | expr ">=" expr  \n  | expr "<=" expr  \n  | expr "NOT" "IN" \'(\' expr_list \')\'  \n  | expr "NOT" "IN" \'(\' select_stmt \')\'  \n  | expr "IN" \'(\' expr_list \')\'  \n  | expr "IN" \'(\' select_stmt \')\'  \n  | expr "LIKE" expr  \n  | expr "NOT LIKE" expr  \n  | expr "MATCH" expr  \n  | expr "REGEXP" expr  \n  | expr "GLOB" expr  \n  | expr "NOT" "BETWEEN" math_expr "AND" math_expr   \n  | expr "BETWEEN" math_expr "AND" math_expr   \n  | expr "IS NOT" expr  \n  | expr "IS" expr  \n  | expr "||" expr  \n  | "CASE" expr case_list "END"  \n  | "CASE" expr case_list "ELSE" expr "END"  \n  | "CASE" case_list "END"  \n  | "CASE" case_list "ELSE" expr "END"  \n  | "CAST" \'(\' expr "AS" data_type \')\'  \n  ; \n \ncase_list: "WHEN" expr "THEN" expr  \n  | "WHEN" expr "THEN" expr case_list  \n  ; \n \narg_expr: \'*\'  \n  | expr  \n  | cursor_arguments  \n  | from_arguments  \n  ; \n \narg_list: /* nil */  \n  | arg_expr  \n  | arg_expr \',\' arg_list  \n  ; \n \nexpr_list: expr  \n  | expr \',\' expr_list  \n  ; \n \ncursor_arguments : "FROM" name  \n  | "FROM" name "LIKE" name  \n  ; \n \ncall_expr: expr  \n  | cursor_arguments  \n  | from_arguments  \n  ; \n \ncall_expr_list: call_expr  \n  | call_expr \',\' call_expr_list  \n  ; \n \ncte_tables:  cte_table  \n  | cte_table \',\' cte_tables  \n  ; \n \ncte_table: cte_decl "AS" \'(\' select_stmt_no_with \')\'  \n  ; \n \ncte_decl: name \'(\' name_list \')\'  \n  | name \'(\' \'*\' \')\'  \n  ; \n \nwith_prefix: "WITH" cte_tables  \n  | "WITH" "RECURSIVE" cte_tables  \n  ; \n \nwith_select_stmt: with_prefix select_stmt_no_with  \n  ; \n \nselect_stmt: with_select_stmt  \n  | select_stmt_no_with  \n  ; \n \nselect_stmt_no_with: select_core_list opt_orderby opt_limit opt_offset  \n  ; \n \nselect_core_list: select_core  \n  | select_core select_core_compound  \n  ; \n \nselect_core_compound: compound_operator select_core_list  \n  ; \n \n \nvalues: \'(\' insert_list \')\'  \n  | \'(\' insert_list \')\' \',\' values  \n  ; \n \nselect_core: "SELECT" select_opts select_expr_list opt_from_query_parts opt_where opt_groupby opt_having opt_select_window  \n  | "VALUES" values  \n  ; \n \ncompound_operator: \n    "UNION"  \n  | "UNION ALL"  \n  | "INTERSECT"  \n  | "EXCEPT"  \n  ; \n \nwindow_func_inv: name \'(\' arg_list \')\' opt_filter_clause "OVER" window_name_or_defn  \n  ; \n \nopt_filter_clause: /* nil */  \n  | "FILTER" \'(\' opt_where \')\'  \n  ; \n \nwindow_name_or_defn: window_defn \n  | name \n  ; \n \nwindow_defn: \'(\' opt_partition_by opt_orderby opt_frame_spec \')\'  \n  ; \n \nopt_frame_spec: /* nil */  \n  | frame_type frame_boundary_opts frame_exclude  \n  ; \n \nframe_type: "RANGE"  \n  | "ROWS"  \n  | "GROUPS"  \n  ; \n \nframe_exclude: /* nil */  \n  | "EXCLUDE NO OTHERS"  \n  | "EXCLUDE CURRENT ROW"  \n  | "EXCLUDE GROUP"  \n  | "EXCLUDE TIES"  \n  ; \n \nframe_boundary_opts: frame_boundary  \n  | "BETWEEN" frame_boundary_start "AND" frame_boundary_end  \n  ; \n \nframe_boundary_start: "UNBOUNDED" "PRECEDING"  \n  | expr "PRECEDING"  \n  | "CURRENT ROW"  \n  | expr "FOLLOWING"  \n  ; \n \nframe_boundary_end: expr "PRECEDING"  \n  | "CURRENT ROW"  \n  | expr "FOLLOWING"  \n  | "UNBOUNDED" "FOLLOWING"  \n  ; \n \nframe_boundary: "UNBOUNDED" "PRECEDING"  \n  | expr "PRECEDING"  \n  | "CURRENT ROW"  \n  ; \n \nopt_partition_by: /* nil */  \n  | "PARTITION" "BY" expr_list  \n  ; \n \nopt_select_window: /* nil */  \n  | window_clause  \n  ; \n \nwindow_clause: "WINDOW" window_name_defn_list  \n  ; \n \nwindow_name_defn_list: window_name_defn  \n  | window_name_defn \',\' window_name_defn_list  \n  ; \n \nwindow_name_defn: name "AS" window_defn  \n \nregion_spec: \n    name   \n  | name "PRIVATE"  \n  ; \n \nregion_list : \n    region_spec \',\' region_list  \n  | region_spec  \n  ; \n \ndeclare_schema_region_stmt: \n  "@DECLARE_SCHEMA_REGION" name  \n  | "@DECLARE_SCHEMA_REGION" name "USING" region_list  \n  ; \n \ndeclare_deployable_region_stmt: \n  "@DECLARE_DEPLOYABLE_REGION"  name  \n  | "@DECLARE_DEPLOYABLE_REGION" name "USING" region_list  \n  ; \n \nbegin_schema_region_stmt: "@BEGIN_SCHEMA_REGION" name  \n  ; \n \nend_schema_region_stmt: "@END_SCHEMA_REGION"  \n  ; \n \nschema_ad_hoc_migration_stmt: "@SCHEMA_AD_HOC_MIGRATION" version_annotation  \n  ; \n \nopt_from_query_parts: /* nil */  \n  | "FROM" query_parts  \n  ; \n \nopt_where: /* nil */  \n  | "WHERE" expr  \n  ; \n \nopt_groupby: /* nil */  \n  | "GROUP" "BY" groupby_list  \n  ; \n \ngroupby_list: groupby_item  \n  | groupby_item \',\' groupby_list  \n  ; \n \ngroupby_item: expr opt_asc_desc  \n  ; \n \nopt_asc_desc: /* nil */  \n  | "ASC"  \n  | "DESC"  \n  ; \n \nopt_having: /* nil */  \n  | "HAVING" expr  \n  ; \n \nopt_orderby: /* nil */  \n  | "ORDER" "BY" groupby_list  \n  ; \n \nopt_limit: /* nil */  \n  | "LIMIT" expr  \n  ; \n \nopt_offset: /* nil */  \n  | "OFFSET" expr  \n  ; \n \nselect_opts: /* nil */  \n  | "ALL"   \n  | "DISTINCT"  \n  | "DISTINCTROW"  \n  ; \n \nselect_expr_list: select_expr  \n  | select_expr \',\' select_expr_list  \n  | \'*\'  \n  ; \n \nselect_expr: expr opt_as_alias  \n  |  name \'.\' \'*\'  \n  ; \n \nopt_as_alias: /* nil */  \n  | "AS" name  \n  | name  \n  ; \n \nquery_parts: table_or_subquery_list  \n  | join_clause  \n  ; \n \ntable_or_subquery_list: table_or_subquery  \n  | table_or_subquery \',\' table_or_subquery_list  \n  ; \n \njoin_clause: table_or_subquery join_target_list  \n  ; \n \njoin_target_list: join_target  \n  | join_target join_target_list  \n  ; \n \ntable_or_subquery: name opt_as_alias  \n  | \'(\' select_stmt \')\' opt_as_alias  \n  | table_function opt_as_alias  \n  | \'(\' query_parts \')\'  \n  ; \n \njoin_target: opt_inner_cross "JOIN" table_or_subquery opt_join_cond  \n  | left_or_right opt_outer "JOIN" table_or_subquery opt_join_cond  \n  ; \n \nopt_inner_cross: /* nil */  \n  | "INNER"  \n  | "CROSS"  \n  ; \n \nopt_outer: /* nil */  \n  | "OUTER"  \n  ; \n \nleft_or_right: "LEFT"  \n  | "RIGHT"  \n  ; \n \nopt_join_cond: /* nil */  \n  | join_cond \n  ; \n \njoin_cond: "ON" expr  \n  | "USING" \'(\' name_list \')\'  \n  ; \n \ntable_function: name \'(\' arg_list \')\'  \n  ; \n \ncreate_view_stmt: "CREATE" opt_temp "VIEW" opt_if_not_exists name "AS" select_stmt opt_delete_version_attr  \n  ; \n \nwith_delete_stmt: with_prefix delete_stmt  \n  ; \n \ndelete_stmt: "DELETE" "FROM" name opt_where  \n  ; \n \nopt_insert_dummy_spec : /*nil*/   \n  | "@DUMMY_SEED" \'(\' expr \')\' dummy_modifier  \n  ; \n \ndummy_modifier: /* nil */  \n  | "@DUMMY_NULLABLES"  \n  | "@DUMMY_DEFAULTS"   \n  | "@DUMMY_NULLABLES" "@DUMMY_DEFAULTS"   \n  | "@DUMMY_DEFAULTS" "@DUMMY_NULLABLES"   \n  ; \n \ninsert_stmt_type : "INSERT" "INTO"  \n  | "INSERT" "OR" "REPLACE" "INTO"  \n  | "INSERT" "OR" "IGNORE" "INTO"  \n  | "INSERT" "OR" "ROLLBACK" "INTO"  \n  | "INSERT" "OR" "ABORT" "INTO"  \n  | "INSERT" "OR" "FAIL" "INTO"  \n  | "REPLACE" "INTO"  \n  ; \n \nwith_insert_stmt: with_prefix insert_stmt  \n  ; \n \nopt_column_spec: /* nil */  \n  | \'(\' opt_name_list \')\'  \n  | \'(\' "LIKE" name \')\'  \n  ; \n \nfrom_cursor:  "FROM" "CURSOR" name opt_column_spec  \n  ; \n \nfrom_arguments: "FROM" "ARGUMENTS"  \n  | "FROM" "ARGUMENTS" "LIKE" name  \n  ; \n \ninsert_stmt: insert_stmt_type name opt_column_spec select_stmt opt_insert_dummy_spec  \n  | insert_stmt_type name opt_column_spec from_arguments opt_insert_dummy_spec  \n  | insert_stmt_type name opt_column_spec from_cursor opt_insert_dummy_spec  \n  | insert_stmt_type name "DEFAULT" "VALUES"  \n  ; \n \ninsert_list:  \n  | expr  \n  | expr \',\' insert_list  \n  ; \n \nbasic_update_stmt: "UPDATE" opt_name "SET" update_list opt_where  \n  ; \n \nwith_update_stmt: with_prefix update_stmt  \n  ; \n \nupdate_stmt: "UPDATE" name "SET" update_list opt_where opt_orderby opt_limit  \n  ; \n \nupdate_entry: name \'=\' expr  \n  ; \n \nupdate_list: update_entry  \n  | update_entry \',\' update_list  \n  ; \n \nwith_upsert_stmt: with_prefix upsert_stmt  \n  ; \n \nupsert_stmt: insert_stmt "ON CONFLICT" conflict_target "DO" "NOTHING"  \n  | insert_stmt "ON CONFLICT" conflict_target "DO" basic_update_stmt  \n  ; \n \nupdate_cursor_stmt: \n    "UPDATE" "CURSOR" name opt_column_spec "FROM" "VALUES" \'(\' insert_list \')\'   \n  | "UPDATE" "CURSOR" name opt_column_spec from_cursor  \n  ; \n \nconflict_target:  /* nil */  \n  | \'(\' indexed_columns \')\' opt_where  \n  ; \n \ncreation_type: object_type  \n  | object_type "NOT" "NULL"  \n  | "TEXT"  \n  | "TEXT" "NOT" "NULL"  \n  | "BLOB"  \n  | "BLOB" "NOT" "NULL"  \n  ; \n \nfunction: "FUNC" | "FUNCTION" \n  ; \n \ndeclare_func_stmt: "DECLARE" function name \'(\' params \')\' data_type_opt_notnull  \n  | "DECLARE" "SELECT" function name \'(\' params \')\' data_type_opt_notnull  \n  | "DECLARE" function name \'(\' params \')\' "CREATE" creation_type  \n  | "DECLARE" "SELECT" function name \'(\' params \')\' \'(\' typed_names \')\'  \n  ; \n \nprocedure: "PROC" | "PROCEDURE" \n  ; \n \ndeclare_proc_stmt: "DECLARE" procedure name \'(\' params \')\'  \n  | "DECLARE" procedure name \'(\' params \')\' \'(\' typed_names \')\'  \n  | "DECLARE" procedure name \'(\' params \')\' "USING" "TRANSACTION"  \n  | "DECLARE" procedure name \'(\' params \')\' "OUT" \'(\' typed_names \')\'  \n  | "DECLARE" procedure name \'(\' params \')\' "OUT" \'(\' typed_names \')\' "USING" "TRANSACTION"  \n  | "DECLARE" procedure name \'(\' params \')\' "OUT" "UNION" \'(\' typed_names \')\'  \n  | "DECLARE" procedure name \'(\' params \')\' "OUT" "UNION" \'(\' typed_names \')\' "USING" "TRANSACTION"  \n  ; \n \ncreate_proc_stmt: "CREATE" procedure name \'(\' params \')\' "BEGIN" opt_stmt_list "END"  \n  ; \n \nopt_inout: /* nil */  \n  | "IN"  \n  | "OUT"  \n  | "INOUT"  \n  ; \n \ntyped_name: name data_type_opt_notnull  \n  | "LIKE" name  \n  ; \n \ntyped_names: typed_name   \n  | typed_name \',\' typed_names  \n  ; \n \nparam: opt_inout name data_type_opt_notnull  \n  | "LIKE" name  \n  ; \n \nparams: /* nil */  \n  | param  \n  |  param \',\' params   \n  ; \n \ndeclare_stmt: "DECLARE" name_list data_type_opt_notnull  \n  | "DECLARE" name "CURSOR FOR" select_stmt  \n  | "DECLARE" name "CURSOR FOR" explain_stmt  \n  | "DECLARE" name "CURSOR FOR" call_stmt   \n  | "DECLARE" name "CURSOR" "FETCH" "FROM" call_stmt  \n  | "DECLARE" name "CURSOR" "LIKE" name  \n  | "DECLARE" name "CURSOR" "LIKE" select_stmt  \n  ; \n \ncall_stmt: "CALL" name \'(\' \')\'  \n  | "CALL" name \'(\' call_expr_list \')\'  \n  ; \n \nwhile_stmt: "WHILE" expr "BEGIN" opt_stmt_list "END"  \n  ; \n \nloop_stmt: "LOOP" fetch_stmt "BEGIN" opt_stmt_list "END"  \n  ; \n \nleave_stmt: "LEAVE"  \n  ; \n \nreturn_stmt: "RETURN"  \n  ; \n \nthrow_stmt: "THROW"  \n  ; \n \ntrycatch_stmt: "BEGIN" "TRY" opt_stmt_list "END" "TRY" \';\' "BEGIN" "CATCH" opt_stmt_list "END" "CATCH"  \n  ; \n \ncontinue_stmt: "CONTINUE"  \n  ; \n \nfetch_stmt: "FETCH" name "INTO" name_list  \n  | "FETCH" name  \n  ; \n \nfetch_values_stmt: \n    "FETCH" name opt_column_spec "FROM" "VALUES" \'(\' insert_list \')\' opt_insert_dummy_spec  \n  | "FETCH" name opt_column_spec from_arguments opt_insert_dummy_spec  \n  | "FETCH" name opt_column_spec from_cursor opt_insert_dummy_spec  \n  ; \n \nfetch_call_stmt: "FETCH" name opt_column_spec "FROM" call_stmt  \n  ; \n \nfetch_cursor_stmt: "FETCH" name opt_column_spec "FROM" name  \n  ; \n \nopen_stmt: "OPEN" name  \n  ; \n \nclose_stmt: "CLOSE" name   \n  ; \n \nout_stmt: "OUT" name   \n  ; \n \nout_union_stmt: "OUT" "UNION" name   \n  ; \n \nif_stmt: "IF" expr "THEN" opt_stmt_list opt_elseif_list opt_else "END" "IF"  \n  ; \n \nopt_else: /* nil */  \n  | "ELSE" opt_stmt_list  \n  ; \n \nelseif_item: "ELSE IF" expr "THEN" opt_stmt_list  \n  ; \n \nelseif_list: elseif_item  \n  | elseif_item elseif_list  \n  ; \n \nopt_elseif_list: /* nil */  \n  | elseif_list  \n  ; \n \nbegin_trans_stmt: "BEGIN" "TRANSACTION"  \n  ; \n \nrollback_trans_stmt: "ROLLBACK" "TRANSACTION"  \n  | "ROLLBACK" "TRANSACTION" "TO" "SAVEPOINT" name  \n  ; \n \ncommit_trans_stmt: "COMMIT" "TRANSACTION"  \n  ; \n \nsavepoint_stmt: "SAVEPOINT" name  \n  ; \n \nrelease_savepoint_stmt: "RELEASE" "SAVEPOINT" name  \n  ; \n \necho_stmt: "@ECHO" name \',\' str_literal  \n  ; \n \nalter_table_add_column_stmt: "ALTER" "TABLE" name "ADD" "COLUMN" col_def  \n  ; \n \ncreate_trigger_stmt:  "CREATE" opt_temp "TRIGGER" opt_if_not_exists trigger_def opt_delete_version_attr  \n  ; \n \ntrigger_def: name trigger_condition trigger_operation "ON" name trigger_action  \n  ; \n \ntrigger_condition: \n   /* nil */   \n | "BEFORE"      \n | "AFTER"       \n | "INSTEAD" "OF"  \n ; \n \ntrigger_operation: \n    "DELETE"   \n  | "INSERT"   \n  | "UPDATE" opt_of  \n  ; \n \nopt_of: \n    /* nil */  \n  | "OF" name_list  \n  ; \n \ntrigger_action:  opt_foreachrow opt_when_expr "BEGIN" trigger_stmts "END"  \n  ; \n \nopt_foreachrow: \n    /* nil */  \n  | "FOR EACH ROW"   \n  ; \n \nopt_when_expr: \n    /* nil */  \n  | "WHEN" expr  \n  ; \n \ntrigger_stmts: \n    trigger_stmt   \n  | trigger_stmt  trigger_stmts  \n  ; \n \n/* These forms are slightly different than the normal statements, not all variations are allowed. \n * This section clearly states the mapping.  It could be done more tersely but this costs us nothing. \n */ \n \ntrigger_stmt: \n    trigger_update_stmt \';\'  \n  | trigger_insert_stmt \';\'  \n  | trigger_delete_stmt \';\'  \n  | trigger_select_stmt \';\'  \n  ; \n \ntrigger_select_stmt : select_stmt_no_with  \n  ; \n \ntrigger_insert_stmt : insert_stmt  \n  ; \n \ntrigger_delete_stmt : delete_stmt  \n  ; \n \ntrigger_update_stmt : basic_update_stmt  \n  ; \n \nenforcement_options: \n    "FOREIGN" "KEY" "ON" "UPDATE"  \n  | "FOREIGN" "KEY" "ON" "DELETE"  \n  | "JOIN"  \n  | "UPSERT" "STATEMENT"  \n  | "WINDOW" function  \n  | procedure  \n  | "WITHOUT" "ROWID"  \n  ; \n \nenforce_strict_stmt: "@ENFORCE_STRICT" enforcement_options  \n  ; \n \nenforce_normal_stmt: "@ENFORCE_NORMAL" enforcement_options  \n  ; \n \n')))}p.isMDXComponent=!0}}]);