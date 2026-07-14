const username = 'semoizm'; // GitHub kullanıcı adın
const grid = document.getElementById('projects-grid');

async function fetchProjects() {
    try {
        // GitHub API'sinden projeleri çekiyoruz
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        // "Yükleniyor" yazısını temizle
        grid.innerHTML = ''; 

        repos.forEach(repo => {
            // Sadece kendi repolarını göster (fork'ları filtrele)
            if (!repo.fork) {
                const card = document.createElement('a');
                card.className = 'card';
                card.href = repo.html_url;
                card.target = '_blank';
                
                // Karakter kodlama hatasını önlemek için güvenli HTML yapısı
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description ? repo.description : 'Açıklama eklenmemiş.'}</p>
                    <div style="margin-top: 15px; font-size: 0.85em; color: #aaa;">
                        <span style="margin-right: 15px;">⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
    } catch (error) {
        grid.innerHTML = '<p style="color:red;">Projeler yüklenirken bir hata oluştu.</p>';
        console.error('Hata:', error);
    }
}

// Fonksiyonu çalıştır
fetchProjects();