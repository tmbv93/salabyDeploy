class Department < ActiveRecord::Base

  has_many :user, through: :department_member
  belongs_to :school
end
