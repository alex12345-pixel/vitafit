from django.urls import path, include
from rest_framework import routers
from login_register import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'login_register', views.LoginView, 'login_register')

urlpatterns = [
    path("api/v2/", include(router.urls)),
    path('docs/', include_docs_urls(title="API"))
]