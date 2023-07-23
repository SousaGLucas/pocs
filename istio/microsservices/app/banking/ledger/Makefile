.PHONY: namespace
create-namespace:
	@echo "== Creating ledger namespace =="
	@kubectl create namespace ledger
	@echo "== =="

	@echo "== Adding ledger namespace label to Istio =="
	@kubectl label namespace ledger istio-injection=enabled
	@echo "== =="

.PHONY: db
db:
	@echo "== Creating ledger db persistence volume claim =="
	@kubectl apply -f db_persistence_volume_claims.yaml
	@echo "== =="

	@echo "== Creating ledger db persistence volume =="
	@kubectl apply -f db_persistence_volume.yaml
	@echo "== =="

	@echo "== Creating ledger db service account =="
	@kubectl apply -f db_service_account.yaml
	@echo "== =="

	@echo "== Creating ledger db deployment =="
	@kubectl apply -f db_deployment.yaml
	@echo "== =="

	@echo "== Creating ledger db service =="
	@kubectl apply -f db_service.yaml
	@echo "== =="

.PHONY: api
api:
	@echo "== Creating ledger api service account =="
	@kubectl apply -f api_service_account.yaml
	@echo "== =="

	@echo "== Creating ledger api deployment =="
	@kubectl apply -f api_deployment.yaml
	@echo "== =="

	@echo "== Creating ledger api service =="
	@kubectl apply -f api_service.yaml
	@echo "== =="
