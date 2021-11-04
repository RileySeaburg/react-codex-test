// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// get the query string from the url
// send the query to the openai codex api
// return the response


export default function handler(req, res) {

  const { query } = req.query;
  const { apiKey } = req.query;

  if (!query || !apiKey) {
    res.status(400).json({
      error: 'Missing query or apiKey'
    });
    return;
  }

  const url = `https://api.openai.com/v1/predict?model_name=${apiKey}&text=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.status(200).json(json);
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    });

}
