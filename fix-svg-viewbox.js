import fs from 'fs';

try {
  const content = fs.readFileSync('src/assets/Group.svg', 'utf8');
  const newContent = content.replace(/width="2132" height="1951" viewBox="0 0 2132 1951"/, 'width="1000" height="1000" viewBox="0 0 1000 1000"');
  fs.writeFileSync('src/assets/Group.svg', newContent);
  console.log('SVG viewBox and dimensions successfully updated');
} catch (error) {
  console.error('Error modifying SVG:', error);
}
