echo -e 'Building the site app'
cd siteProject && npm run build

echo -e 'Building the admin app'
cd ../adminProject && npm run build