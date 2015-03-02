json.array!(@department_members) do |department_member|
  json.extract! department_member, :id
  json.url department_member_url(department_member, format: :json)
end
