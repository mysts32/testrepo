
// 検索ボタンをクリックしたときの処理
document.getElementById("search").addEventListener("click", () => {

    // 入力されたユーザー名を取得する
    const username = document.getElementById("username").value.trim();

    // 結果を表示する場所を取得する
    const resultDiv = document.getElementById("result");

    // ユーザー名が入力されていない場合
    if (!username) {
        resultDiv.innerHTML = "<p>ユーザー名を入力してください。</p>";
        return;
    }

    // GitHub APIからユーザー情報を取得する
    fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)

        .then(res => {

            // ユーザーが見つからない場合
            if (!res.ok) {
                throw new Error("ユーザーが見つかりませんでした。");
            }

            return res.json();

        })

        // 取得したユーザー情報を表示する
        .then(data => {

            resultDiv.innerHTML = `
                <p><strong>ユーザー名：</strong> ${data.login}</p>
                <p><strong>名前：</strong> ${data.name || "未登録"}</p>
                <p><strong>フォロワー数：</strong> ${data.followers}人</p>
                <p><strong>公開リポジトリ数：</strong> ${data.public_repos}</p>
                <img src="${data.avatar_url}" width="100" alt="アイコン画像">
            `;

        })

        // エラーが発生した場合
        .catch(err => {

            resultDiv.innerHTML =
                `<p style="color:red;">${err.message}</p>`;

        });

});
