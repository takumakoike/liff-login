const LIFF_ID = "2003800736-KBGB6RzZ"

liff.init({liffId: LIFF_ID})
    .then(() => {
        if(!liff.isLoggedIn()){
            liff.login();
        } else {
            document.getElementById("title").textContent = "ログインしました";
            liff.getProfile()
                .then((profile) => {
                    const id = profile.userId;
                    const name = profile.displayName;

                    document.getElementById("info-id").textContent = `ID：${id}`
                    document.getElementById("info-name").textContent = `名前：${name}`

                    liff.sendMessages([
                            {
                                type: "text",
                                text: "Hello, World!",
                            }
                        ])
                        .catch((err) => {
                            console.log("error", err);
                          });
                })
        }})