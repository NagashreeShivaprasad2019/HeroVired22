json.extract! movietab, :id, :name, :description, :director, :language, :created_at, :updated_at
json.url movietab_url(movietab, format: :json)
