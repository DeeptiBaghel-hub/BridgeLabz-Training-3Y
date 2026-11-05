'use strict';

// Q6 - Filter student rows as the search input changes, ignoring case.
if (typeof document === 'undefined') {
  console.log('Q6 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="table-app">
      <h1>Student Directory</h1>
      <label for="search">Search students</label>
      <input id="search" type="search" placeholder="Name, branch, or CGPA">
      <table>
        <thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead>
        <tbody>
          <tr><td>Aarav Sharma</td><td>Computer Science</td><td>8.7</td></tr>
          <tr><td>Meera Patel</td><td>Electronics</td><td>9.1</td></tr>
          <tr><td>Rohan Singh</td><td>Mechanical</td><td>7.8</td></tr>
          <tr><td>Ananya Das</td><td>Computer Science</td><td>9.4</td></tr>
          <tr><td>Vivaan Kumar</td><td>Civil</td><td>8.2</td></tr>
        </tbody>
      </table>
      <p id="no-results" role="status" hidden>No results found</p>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .table-app { max-width: 42rem; margin: auto; }
    #search { box-sizing: border-box; margin: .5rem 0 1rem; padding: .5rem; width: 100%; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #bbb; padding: .6rem; text-align: left; }
  `;
  document.head.append(style);

  const search = document.querySelector('#search');
  const rows = [...document.querySelectorAll('tbody tr')];
  const noResults = document.querySelector('#no-results');

  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visibleRows = 0;

    rows.forEach((row) => {
      const matches = row.textContent.toLocaleLowerCase().includes(query);
      row.hidden = !matches;
      if (matches) visibleRows += 1;
    });

    noResults.hidden = visibleRows !== 0;
  });
}
