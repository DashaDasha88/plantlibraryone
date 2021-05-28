CREATE TABLE plants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  genus_species VARCHAR(50) NOT NULL,
  medicinal_uses TEXT,
  magical_uses TEXT,
  correspondences TEXT
);

INSERT INTO plants (name, genus_species, medicinal_uses, magical_uses, correspondences) VALUES ('Sage', 'Salvia officinalis', 'Helps with anxiety, boosts liver function', 'Cleansing, protection', 'Earth/Air, Feminine, Jupiter');
INSERT INTO plants (name, genus_species, medicinal_uses, magical_uses, correspondences) VALUES ('Lavender', 'Lavandula', 'Use to treat skin issues; use as sleeping aid', 'Peace, friendship, love, harmony', 'Air, Masculine, Mercury');
INSERT INTO plants (name, genus_species, medicinal_uses, magical_uses, correspondences) VALUES ('Rosemary', 'Salvia rosmarinus', 'A good hair supplement; contains Vitamin C', 'Banishes negativity and nightmares', 'Fire, Sun, Masculine');