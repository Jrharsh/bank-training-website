// Under Construction: return an empty scenario list without importing legacy data

const EMPTY_SCENARIO = {
  key: 'empty',
  title: 'Crisis Management Game',
  description: 'Scenarios are currently being rebuilt. No legacy scenarios are loaded.',
  questions: []
};

export default function handler(req, res) {
  res.status(200).json([EMPTY_SCENARIO]);
}
