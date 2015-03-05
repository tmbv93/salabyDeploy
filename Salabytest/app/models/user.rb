class User < ActiveRecord::Base

  # int status
  enum status: [:system_admin, :school_admin, :class_admin, :student]

  # Relations
  belongs_to :school

  has_many :favorites
  has_many :games, through: :favorites

  has_many :department_members
  has_many :departments, through: :department_members

  has_many :homeworks, through: :departments

  # Security
  has_secure_password

  # Validate
  validates :first_name, presence: true, length: {maximum: 35}
  validates :last_name, presence: true, length: {maximum: 35}
  validates :password, length: {minimum: 6}
  validates :username, presence: true, length: {minimum: 6, maximum: 25}, uniqueness: {case_sensitive: false}
end
