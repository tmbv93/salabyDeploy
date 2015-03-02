json.array!(@games) do |game|
  json.extract! game, :id, :title, :category
  json.url game_url(game, format: :json)
end
