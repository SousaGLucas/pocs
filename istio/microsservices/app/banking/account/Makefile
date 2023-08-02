.PHONY: namespace
create-namespace:
	@echo "== Creating account namespace =="
	@kubectl create namespace account
	@echo "== =="

	@echo "== Adding account namespace label to Istio =="
	@kubectl label namespace account istio-injection=enabled
	@echo "== =="

.PHONY: db
db:
	@echo "== Creating account db persistence volume claim =="
	@kubectl apply -f db_persistence_volume_claims.yaml
	@echo "== =="

	@echo "== Creating account db persistence volume =="
	@kubectl apply -f db_persistence_volume.yaml
	@echo "== =="

	@echo "== Creating account db service account =="
	@kubectl apply -f db_service_account.yaml
	@echo "== =="

	@echo "== Creating account db deployment =="
	@kubectl apply -f db_deployment.yaml
	@echo "== =="

	@echo "== Creating account db service =="
	@kubectl apply -f db_service.yaml
	@echo "== =="

.PHONY: api
api:
	@echo "== Creating account api service account =="
	@kubectl apply -f api_service_account.yaml
	@echo "== =="

	@echo "== Creating account api deployment =="
	@kubectl apply -f api_deployment.yaml
	@echo "== =="

	@echo "== Creating account api service =="
	@kubectl apply -f api_service.yaml
	@echo "== =="

	@echo "== Creating Istio Ingress =="
	@kubectl apply -f api_ingress.yaml
	@echo "== =="
