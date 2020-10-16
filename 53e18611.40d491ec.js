(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(2),a=o(6),r=(o(0),o(84)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"CG/SQL is a code generation system for the popular SQLite library that allows developers to write stored procedures in a variant of Transact-SQL (T-SQL) and compile them into C code that uses SQLite\u2019s C API to do the coded operations. CG/SQL enables engineers to create highly complex stored procedures with very large queries, without the manual code checking that existing methods require.",source:"@site/../docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Building CG/SQL",permalink:"/docs/building"}},c=[],l={rightToc:c};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CG/SQL is a code generation system for the popular SQLite library that allows developers to write stored procedures in a variant of Transact-SQL (T-SQL) and compile them into C code that uses SQLite\u2019s C API to do the coded operations. CG/SQL enables engineers to create highly complex stored procedures with very large queries, without the manual code checking that existing methods require."),Object(r.b)("p",null,"The full system also includes features for managing and upgrading schema, creating test code for stored procedures, getting query plans for procedures, as well as interfacing with stored procedures from other languages, such as Java and Objective-C. The JSON output allows for the creation of even more analysis or interfacing code. The package includes extensive documentation on the language and system."),Object(r.b)("h1",{id:"what-it-does"},"What it does:"),Object(r.b)("p",null,"The CQL compiler does most of the heavy lifting. This compiler reads the schema and procedures, providing a strongly typed language with hundreds of compile-time errors designed to prevent runtime SQL issues. The compiler carefully tracks the data types of variables as well as schema types, and reports inconsistencies (such as trying to assign nullable columns to non-nullable output variables), and otherwise ensures that the SQLite APIs are used consistently and properly."),Object(r.b)("p",null,"The generated code always checks the various return codes and always uses the correct column ordinals and column types when binding or reading data to or from the SQLite system \u2014 areas that are notoriously difficult to get right and keep right. Additionally, annotations on schema allow the system to automatically create stored procedures that will upgrade a database from any previous schema version to the current one, with dozens of checks in place to make this possible."),Object(r.b)("p",null,"Annotations on procedures can also be used to indicate that you would like supporting test code to create schema fragments and insert data into that schema. This allows procedures to be unit tested with minimal fuss and no dependency on an as-deployed system. Likewise, these facilities can create schema to allow query plans to be checked at compile time."),Object(r.b)("h1",{id:"why-it-matters"},"Why it matters:"),Object(r.b)("p",null,"SQLite is widely used, but creating well tested and maintainable data access layers can be challenging at best. Many teams use some kind of code generation to avoid having to change dozens of ordinals every time a column is added, but these can be error prone. The CQL compiler in CG/SQL allows you to create highly complex stored procedures with very large queries and with a combination of syntax helpers and strong typing these procedures are much easier to get right and keep right. The combination of strong typing in the language plus facilities for good unit testing can provide confidence that even very complex logic is correct. Syntax helpers convert safer code into the canonical SQL, allowing engineers to write less code that is more correct \u2014 and still runs everywhere. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"create procedure insert_a_row(like your_table)\nbegin\n  insert into your_table from arguments;\nend;\n")),Object(r.b)("p",null,"Creates a procedure that inserts into any table (e.g., your_table) whose arguments are exactly the columns of the table. You cannot possibly forget any columns, nor can you put the potentially dozens of arguments in the wrong order. These forms are not only brief but also highly error-resistant, making it easier for engineers to generate code without having to check every bit manually."),Object(r.b)("p",null,"Original Source: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://engineering.fb.com/open-source/cg-sql/"}),"FB Engineering blog")))}d.isMDXComponent=!0}}]);