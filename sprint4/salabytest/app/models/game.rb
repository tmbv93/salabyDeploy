class Game < ActiveRecord::Base

  enum category: %w('RLE', 'Norsk', 'Matematikk')

  has_many :user, through: :favorite
end
