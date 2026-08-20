import { GridIronMark } from "./GridIronMark";

export default function App() {
  return (
    <main className="page">
      <div className="glow" aria-hidden="true" />

      <div className="content">
        <GridIronMark size={104} />

        <span className="status">
          <span className="dot" />
          En construction
        </span>

        <h1>GridIron</h1>
        <p>
          La plateforme de gestion pour les clubs de football américain —
          effectifs, matchs, statistiques et rapports IA. Le site arrive
          bientôt.
        </p>

      </div>

      <footer>© {new Date().getFullYear()} GridIron</footer>
    </main>
  );
}
