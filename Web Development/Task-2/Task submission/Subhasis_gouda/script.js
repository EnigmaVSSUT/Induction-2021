function setTheme(themeName) 
{
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function Theme() 
{
    if (localStorage.getItem('theme') === 'T2') {
        setTheme('T1');
    } else {
        setTheme('T2');
    }
}
(
function () 
{
    if (localStorage.getItem('theme') === 'T2') {
        setTheme('T2');
    } else {
        setTheme('T1');
    }
}
)
(); 