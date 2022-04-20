%{
    #include<stdio.h>
%}

%%
[ \n\t]+ { fprintf(yyout," ");}
. { fprintf(yyout,%s,yytext);}
%%

int yywrap(){return 1;}

int main(){
    extern FILE *yyin,*yyout;
    
    yylex();
    return 0;
}