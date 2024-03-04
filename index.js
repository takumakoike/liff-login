const LIFF_ID = "2003800736-KBGB6RzZ"

liff.init({liffId: LIFF_ID})
    .then(() => {
        if(!liff.isLoggedIn()){
            liff.login();
        } else {
            document.getElementById("title").textContent = "ログインしました";
        }
    })