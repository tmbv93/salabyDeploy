class User < ActiveRecord::Base

  # int status
  enum status: %w('system_admin', 'school_admin', 'class_admin', 'student')

  # Relations
  has_many :game, through: :favorite
  belongs_to :school
  has_many :department, through: :department_member

  # Security
  has_secure_password

  # Validate
  validates :first_name, presence: true, length: {maximum: 35}
  validates :last_name, presence: true, length: {maximum: 35}
  validates :password, length: {minimum: 6}
  validates :username, presence: true, length: {minimum: 6, maximum: 25}, uniqueness: {case_sensitive: false}

end
