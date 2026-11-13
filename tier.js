var t=document.getElementById('t');
function rt(){var n=+t.value;y.textContent=n*200+' лет';s.style.width=n*10+'%';d.textContent='Таер '+n+': гарантированные '+n*200+' лет жизни. Чем выше таер, тем глубже и престижнее размещена банка.'}
t.oninput=rt;rt();
