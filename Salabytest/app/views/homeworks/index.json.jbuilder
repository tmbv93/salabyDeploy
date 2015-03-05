json.array!(@homeworks) do |homework|
  json.extract! homework, :id, :title, :description, :class_id, :game_id
  json.url homework_url(homework, format: :json)
end
