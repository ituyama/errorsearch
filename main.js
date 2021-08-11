function cmd(){
var command = document.getElementById("message").value;

if ( command.match(/SyntaxError/)) {
  if ( command.match(/function definition/)) {

  command="構文エラー（引数）　引数が重複している可能性があります。"
  urls="http://ituyama.com/errorsearch/imgs/syntax-3.png"

   } else if ( command.match(/literal/)) {

    command="構文エラー（クオーテーション忘れ）クオーテーションやダブルクオーテーションを忘れている可能性があります。"
    urls="http://ituyama.com/errorsearch/imgs/syntax-1.png"

    } else if ( command.match(/parentheses/)) {

    command="構文エラー（かっこ忘れ）かっこを忘れている可能性があります。"
    urls="http://ituyama.com/errorsearch/imgs/syntax-2.png"

    }else{
    command="構文エラー　コロン（:）や閉じかっこが抜けている可能性があります。"
    urls="http://ituyama.com/errorsearch/e1s.png"
  }



}
else if ( command.match(/IndentationError/)) {
    if ( command.match(/unexpected/)) {

  command="インデントエラー（不要なインデント）　不要なインデントがある可能性があります"
  urls="http://ituyama.com/errorsearch/imgs/indent-1.png"

   }else　 if ( command.match(/indentation/)) {

  command="インデントエラー（インデントの不足）　インデントが不足しています。"
  urls="http://ituyama.com/errorsearch/imgs/indent.png"

   }else
   
   
   
   
   {
     command="インデントエラー　インデントがどこか抜けている可能性があります。"
      urls="http://ituyama.com/errorsearch/imgs/indent.png"
   }


}
else if ( command.match(/NameError/)) {

command="ネームエラー　定義していない変数を使用している可能性があります。"
urls="http://ituyama.com/errorsearch/imgs/name.png"
}
else if ( command.match(/TypeError/)) {
  if ( command.match(/arguments/)) {

  command="型エラー(引数)　引数の数が多かったり少なかったりする可能性があります。"
  urls="http://ituyama.com/errorsearch/imgs/type-1.png"
  }else{
  command="型エラー　型を確認してみてください。（int型とstr型を足そうとしていませんか？）"
  urls="http://ituyama.com/errorsearch/imgs/type.png"
  }

}
else if ( command.match(/ValueError/)) {

command="値エラー　定められた型に対して不適切な値を渡している可能性があります。(int型の変数に文字列を渡そうとしていませんか？)"
urls="http://ituyama.com/errorsearch/imgs/value.png"
}
else if ( command.match(/IndexError/)) {

command="インデックスエラー　定義したリストに無い値を参照している可能性があります。"
urls="http://ituyama.com/errorsearch/imgs/index.png"
}
else if ( command.match(/KeyError/)) {

command="キーエラー　辞書に登録されてないキーを参照している可能性があります。（スペル間違っていませんか？）"
urls="http://ituyama.com/errorsearch/imgs/key.png"
}
else if ( command.match(/ModuleNotFoundError/)) {

command="モジュールエラー　インストールしていないモジュールをimportしている可能性があります。"
urls="http://ituyama.com/errorsearch/imgs/module.png"
}
else if ( command.match(/FileNotFoundError/)) {

command="ファイルが見つからないエラー　存在しないファイルを参照している可能性があります。（ファイルのパスを確認しましょう）"
urls="http://ituyama.com/errorsearch/imgs/file.png"
}
//else if ( command.match(/UnicodeEncodeError/)) {

//command="文字コード間違ってるよエラー(エンコード)　文字コードが間違っている可能性があります。（SIFT-JSをUTF-8で読み込んでませんか？）"
//urls="http://ituyama.com/errorsearch/e1s.png"
//}
//else if ( command.match(/UnicodeDecodeError/)) {

//command="文字コード間違ってるよエラー（デコード）　文字コードが間違っている可能性があります。（SIFT-JSをUTF-8で読み込んでませんか？）"
//urls="http://ituyama.com/errorsearch/e1s.png"
//}
else{
  command="該当するものがありません。\n解決したらGithubに送ってくれると嬉しいです"
  urls="http://ituyama.com/errorsearch/imgs/sorry.png"
}

let element = document.getElementById("command");
element.innerHTML=command;
let imgs = document.getElementById("img");
imgs.innerHTML=` <div class='card'><img src='${urls}' class='imgs'></div>`;
};