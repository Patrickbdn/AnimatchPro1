// Importation du composant Footer depuis le répertoire des composants
import Footer from "../components/Footer";

// Importation du composant Header depuis le répertoire des composants
import Header from "../components/Header";

// Importation des styles CSS depuis le fichier MainLayout.module.css
import styles from "./MainLayout.module.css";

// Définition du composant fonctionnel MainLayout
function MainLayout({ children }) {
  return (
    <div className="App">
      {/* Utilisation du composant Header */}
      <Header />

      {/* Conteneur principal pour le contenu des pages enfants */}
      <div className={styles.mainlayout}>{children}</div>

      {/* Utilisation du composant Footer */}
      <Footer />
    </div>
  );
}

// Exportation du composant MainLayout par défaut
export default MainLayout;
