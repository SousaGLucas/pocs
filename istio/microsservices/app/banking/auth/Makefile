.PHONY: namespace
create-namespace:
	@echo "== Creating auth namespace =="
	@kubectl create namespace auth
	@echo "== =="

	@echo "== Adding auth namespace label to Istio =="
	@kubectl label namespace auth istio-injection=enabled
	@echo "== =="

.PHONY: db
db:
	@echo "== Creating auth db persistence volume claim =="
	@kubectl apply -f db_persistence_volume_claims.yaml
	@echo "== =="

	@echo "== Creating auth db persistence volume =="
	@kubectl apply -f db_persistence_volume.yaml
	@echo "== =="

	@echo "== Creating auth db service account =="
	@kubectl apply -f db_service_account.yaml
	@echo "== =="

	@echo "== Creating auth db deployment =="
	@kubectl apply -f db_deployment.yaml
	@echo "== =="

	@echo "== Creating auth db service =="
	@kubectl apply -f db_service.yaml
	@echo "== =="

.PHONY: api
api:
	@echo "== Creating auth api service account =="
	@kubectl apply -f api_service_account.yaml
	@echo "== =="

	@echo "== Creating auth api deployment =="
	@kubectl apply -f api_deployment.yaml
	@echo "== =="

	@echo "== Creating auth api service =="
	@kubectl apply -f api_service.yaml
	@echo "== =="
