function getUserInfoFromGithub(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            resolve(xhr.responseText);
        };
        xhr.onerror = () => {
            reject(xhr.statusText);
        }
        xhr.send();
    })
}

// 1. cach viet promise
// https://api.github.com/users/anhtbok92
// Viết thêm code để lấy ra data user khi thành công.
const gitHubUrl = "https://api.github.com/users/anhtbok92";
getUserInfoFromGithub(gitHubUrl)
    .then(githubUserData => {
        console.log('github-user-data: ', githubUserData);
    })
    .catch(error => {
        console.log('github-user-error: ', error);
    });

// 2. Cach viet async await
const gitHubUrl2 = "https://api.github.com/users/nhatban25912345";
async function getUserInfoWithAsyncAwait() {
    try {
        const responseUserGithubData = await getUserInfoFromGithub(gitHubUrl);
        const responseUserGithubData2 = await getUserInfoFromGithub(gitHubUrl2);
        console.log('2. Cach viet async await-data: ', responseUserGithubData);
        console.log('2. Cach viet async await-data2: ', responseUserGithubData2);
        return responseUserGithubData;
    } catch (error) {
        console.log('2. Cach viet async await-error: ', error)
    }
}

getUserInfoWithAsyncAwait();