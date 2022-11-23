from django.conf.urls import include
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
    path('create-user/', create_user),
    path('auth/', CustomAuthToken.as_view()),
    path('create-news/', create_news),
    path('list-news/', list_news),
    path('list-news-of-user/', list_news_of_user),
    path('update-news/', update_news),
    path('delete-news/', delete_news), 
    path('get-user/', get_user), 
    path('update-user/', update_user)
]