// Peer-reviewed work, shown as a full-width credentials card below Education
// and Recognition. Reverse-chronological. Links are DOIs so they stay stable
// even if a publisher reorganizes its site.
const PAPERS = [
  {
    title:
      "Sequential Dynamics of Stearoyl-CoA Desaturase-1 (SCD1)/Ligand Binding and Unbinding Mechanism: A Computational Study",
    journal: "Biomolecules",
    year: "2021",
    link: "https://doi.org/10.3390/biom11101435",
  },
  {
    title:
      "The quinic acid derivative KZ-41 prevents glucose-induced caspase-3 activation in retinal endothelial cells through an IGF-1 receptor dependent mechanism",
    journal: "PLOS ONE",
    year: "2017",
    link: "https://doi.org/10.1371/journal.pone.0180808",
  },
  {
    title:
      "Ensemble-based docking: From hit discovery to metabolism and toxicity predictions",
    journal: "Bioorganic & Medicinal Chemistry",
    year: "2016",
    link: "https://doi.org/10.1016/j.bmc.2016.07.064",
  },
];

const Research = () => (
  <div className="research">
    <h3>Published Research</h3>
    <div className="pub-grid">
      {PAPERS.map(({ title, journal, year, link }) => (
        <div className="pub" key={link}>
          <p className="pub-meta">{journal} · {year}</p>
          <p className="pub-title">{title}</p>
          <a
            className="pub-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the paper →
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Research;
