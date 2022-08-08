// Below syntax is use for when you open the webpage your cross logo is not display at that time

document.querySelector('.cross').style.display = 'none';

// Toggle means if css is applied already then toggle is remove css and it was not there so if you click on that is will be display
// Toggle means j css lageli 6 te click karvathi vay jay and biji var click karvathi pachi dekhay
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    } else {
        document.querySelector('.ham').style.display = 'none'
        // whenever i click on navbar logo then it shows cross logo delay 400millisecond 
        // solve problem : when i click navbar logo immediately it shows cross logo. so timeout function solve this problem
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 400);
    }
});

console.log("fsfs");