class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  

    has_many :user_schedules
    has_many :user_anime_reviews
    has_many :animes, through: :user_schedules
end
