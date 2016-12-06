# Database setup procedure

1. Run `python3 degree_percentage.py` which will generate degree_percentage.csv in `output`

2. Run `sed -i -e "s/,0.0,/,0,/g' output/degree_percentage.csv` in shell to replace 0.0 with 0
