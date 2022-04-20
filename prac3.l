%{
    #include<stdio.h>
    int ch=0,w=0,ws=0,l=0;
%}

%%
[\n] {l++;}
[^ \n\t]+ {w++; ch=ch+yyleng;}
[ ] {ws++;}
. {ch++;}
%%

int yywrap(){return 1;}

int main() {
    yylex();
    printf("char %d\n word %d\n white space %d, line %d",ch,w,ws,l);
    return 0;
}